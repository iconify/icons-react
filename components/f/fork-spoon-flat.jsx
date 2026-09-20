import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ias7glzgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ias7glzgs"/>`,
		"fallback": "streamline-color:fork-spoon-flat",
	});
}

export default Component;
