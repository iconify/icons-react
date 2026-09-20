import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hu3i77b9l.css';
import '../../css/r/rerw1ab9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hu3i77b9l"/><path class="rerw1ab9d"/></g>`,
		"fallback": "tabler:home-plus",
	});
}

export default Component;
