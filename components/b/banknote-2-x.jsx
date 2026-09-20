import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wylrpqbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wylrpqbhq"/>`,
		"fallback": "keyline-icons:banknote-2-x",
	});
}

export default Component;
