import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc0oi5fkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc0oi5fkq"/>`,
		"fallback": "reicon:align-h-spacing",
	});
}

export default Component;
