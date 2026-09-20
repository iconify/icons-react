import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm36d0bix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lm36d0bix"/>`,
		"fallback": "streamline-flex:face-scan-1-remix",
	});
}

export default Component;
