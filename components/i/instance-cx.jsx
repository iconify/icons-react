import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8kuy_ape.css';
import '../../css/z/z0z1a0aie.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="c8kuy_ape"/><path class="z0z1a0aie"/>`,
		"fallback": "carbon:instance-cx",
	});
}

export default Component;
