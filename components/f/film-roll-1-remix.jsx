import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc587fb7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sc587fb7s"/>`,
		"fallback": "streamline:film-roll-1-remix",
	});
}

export default Component;
