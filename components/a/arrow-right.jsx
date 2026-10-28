import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck017qboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck017qboc"/>`,
		"fallback": "codex:arrow-right",
	});
}

export default Component;
