import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6nlfmbje.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6nlfmbje"/>`,
		"fallback": "fluent-mdl2:file-s-q-l",
	});
}

export default Component;
