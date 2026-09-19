import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yes38jbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="check-outline"><path class="Vector yes38jbxi" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:check-outline",
	});
}

export default Component;
