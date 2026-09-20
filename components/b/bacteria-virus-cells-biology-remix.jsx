import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9hmq9b4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s9hmq9b4z"/>`,
		"fallback": "streamline:bacteria-virus-cells-biology-remix",
	});
}

export default Component;
