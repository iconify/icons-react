import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lddcg3b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lddcg3b-t"/>`,
		"fallback": "codex:align-left",
	});
}

export default Component;
