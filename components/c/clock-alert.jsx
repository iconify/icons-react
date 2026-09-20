import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mtt1k0baw.css';
import '../../css/g/gl3vn9r7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mtt1k0baw"/><path class="gl3vn9r7g"/></g>`,
		"fallback": "lucide:clock-alert",
	});
}

export default Component;
