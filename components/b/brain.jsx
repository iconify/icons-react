import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efmf53bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efmf53bwm"/>`,
		"fallback": "codex:brain",
	});
}

export default Component;
