import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qi9ptyb9c.css';
import '../../css/a/a_6cqtbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qi9ptyb9c"/><path class="a_6cqtbtx"/></g>`,
		"fallback": "keyline-icons:bell-off-two-tone",
	});
}

export default Component;
