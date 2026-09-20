import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4z4x4v0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4z4x4v0q"/>`,
		"fallback": "streamline-flex:blank-calendar-remix",
	});
}

export default Component;
