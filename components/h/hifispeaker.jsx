import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf7_k388w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf7_k388w"/>`,
		"fallback": "f7:hifispeaker",
	});
}

export default Component;
