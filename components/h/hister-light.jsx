import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yup-t7bvl.css';
import '../../css/m/m0sn3w28b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yup-t7bvl"/><path class="m0sn3w28b"/>`,
		"fallback": "selfhst:hister-light",
	});
}

export default Component;
