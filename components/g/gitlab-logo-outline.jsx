import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unu9fbpdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gitlab-logo-outline"><path class="(Stroke) Vector unu9fbpdc" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:gitlab-logo-outline",
	});
}

export default Component;
