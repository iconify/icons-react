import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbk574aal.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbk574aal"/>`,
		"fallback": "lineicons:home",
	});
}

export default Component;
