import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts_6gkbtt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts_6gkbtt"/>`,
		"fallback": "codicon:circle-small-filled",
	});
}

export default Component;
