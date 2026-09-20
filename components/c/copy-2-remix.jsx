import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9_cz0n8z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z9_cz0n8z"/>`,
		"fallback": "streamline-flex:copy-2-remix",
	});
}

export default Component;
