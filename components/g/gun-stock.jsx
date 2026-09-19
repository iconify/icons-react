import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh3a-cbel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh3a-cbel"/>`,
		"fallback": "game-icons:gun-stock",
	});
}

export default Component;
