import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5jsw1_0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v5jsw1_0f"/>`,
		"fallback": "streamline:beach-remix",
	});
}

export default Component;
