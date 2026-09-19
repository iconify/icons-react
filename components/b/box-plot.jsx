import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w62ry_euj.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w62ry_euj"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:box-plot",
	});
}

export default Component;
