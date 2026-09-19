import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fycywqbog.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fycywqbog"/>`,
		"fallback": "fluent-mdl2:emoji-disappointed",
	});
}

export default Component;
