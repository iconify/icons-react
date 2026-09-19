import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a78anzptu.css';
import '../../css/c/ci8qm3bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a78anzptu"/><path clip-rule="evenodd" class="ci8qm3bnz"/>`,
		"fallback": "cuida:history-outline",
	});
}

export default Component;
