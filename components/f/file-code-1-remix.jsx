import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgs4tjchy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgs4tjchy"/>`,
		"fallback": "streamline-flex:file-code-1-remix",
	});
}

export default Component;
