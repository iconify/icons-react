import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmznuabvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmznuabvk"/>`,
		"fallback": "selfhst:diun-dash-dark",
	});
}

export default Component;
