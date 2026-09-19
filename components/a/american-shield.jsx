import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh4utmb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh4utmb2f"/>`,
		"fallback": "game-icons:american-shield",
	});
}

export default Component;
