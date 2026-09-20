import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djuarrb4x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djuarrb4x"/>`,
		"fallback": "streamline:amazon-remix",
	});
}

export default Component;
