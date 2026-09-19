import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4-dp5bws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4-dp5bws"/>`,
		"fallback": "fa6-solid:hotel",
	});
}

export default Component;
