import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y568x_bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y568x_bih"/>`,
		"fallback": "codex:dot-circle",
	});
}

export default Component;
