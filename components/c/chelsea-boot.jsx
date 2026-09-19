import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdum019nw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdum019nw"/>`,
		"fallback": "game-icons:chelsea-boot",
	});
}

export default Component;
