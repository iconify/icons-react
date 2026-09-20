import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9jf_1uxp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u9jf_1uxp"/>`,
		"fallback": "streamline-flex:diamond-1-remix",
	});
}

export default Component;
