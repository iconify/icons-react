import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dofq-kb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dofq-kb2j"/>`,
		"fallback": "noviair-light:compass",
	});
}

export default Component;
