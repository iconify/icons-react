import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlof57bab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nlof57bab"/>`,
		"fallback": "streamline-flex:artificial-intelligence-brain-chip-remix",
	});
}

export default Component;
