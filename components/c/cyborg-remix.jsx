import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgvl3po6e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgvl3po6e"/>`,
		"fallback": "streamline-flex:cyborg-remix",
	});
}

export default Component;
