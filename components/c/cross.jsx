import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le4ed9yxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le4ed9yxx"/>`,
		"fallback": "codex:cross",
	});
}

export default Component;
