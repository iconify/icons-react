import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta4qz3cyp.css';
import '../../css/b/b_ffnqx3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ta4qz3cyp"/><path class="b_ffnqx3n"/></g>`,
		"fallback": "akar-icons:check-box",
	});
}

export default Component;
