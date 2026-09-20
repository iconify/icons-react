import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwjwfqq_a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bwjwfqq_a"/>`,
		"fallback": "streamline:braille-blind-remix",
	});
}

export default Component;
