import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7m_wrbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7m_wrbvj"/>`,
		"fallback": "codex:check",
	});
}

export default Component;
