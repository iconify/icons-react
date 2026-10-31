import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1630-b4j.css';
import '../../css/g/g7u0urmpu.css';
import '../../css/b/ba10csb6z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1630-b4j"/><path clip-rule="evenodd" class="g7u0urmpu"/><path class="ba10csb6z"/>`,
		"fallback": "streamline-memes:derp-face-hand-drawn",
	});
}

export default Component;
