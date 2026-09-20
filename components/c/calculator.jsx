import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofk05cbfv.css';
import '../../css/p/p7hyuf70f.css';
import '../../css/j/j8mjksuyo.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofk05cbfv"/><path class="p7hyuf70f"/><path class="j8mjksuyo"/>`,
		"fallback": "lineicons:calculator",
	});
}

export default Component;
