import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6j1gybkv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6j1gybkv"/>`,
		"fallback": "si-glyph:bubble-message-talk",
	});
}

export default Component;
