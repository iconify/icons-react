import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5lxhxsxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5lxhxsxq"/>`,
		"fallback": "game-icons:desk-lamp",
	});
}

export default Component;
