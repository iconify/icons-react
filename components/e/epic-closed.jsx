import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgk9pubpc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lgk9pubpc"/>`,
		"fallback": "pajamas:epic-closed",
	});
}

export default Component;
