import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krbr77msu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="krbr77msu"/>`,
		"fallback": "streamline:computer-chip-1-remix",
	});
}

export default Component;
