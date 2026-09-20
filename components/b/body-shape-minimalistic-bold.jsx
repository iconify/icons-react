import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de--p5bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de--p5bvm"/>`,
		"fallback": "solar:body-shape-minimalistic-bold",
	});
}

export default Component;
