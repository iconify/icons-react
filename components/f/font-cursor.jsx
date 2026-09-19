import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouah7nb5o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ouah7nb5o"/>`,
		"fallback": "gravity-ui:font-cursor",
	});
}

export default Component;
