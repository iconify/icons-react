import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsu_n2y9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsu_n2y9k"/>`,
		"fallback": "codex:bar-chart",
	});
}

export default Component;
