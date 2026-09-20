import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-y74dbpf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-y74dbpf"/>`,
		"fallback": "streamline:brain-remix",
	});
}

export default Component;
