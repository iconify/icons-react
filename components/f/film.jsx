import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avb683b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avb683b0o"/>`,
		"fallback": "codex:film",
	});
}

export default Component;
