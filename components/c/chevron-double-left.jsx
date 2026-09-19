import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu5qzcslb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu5qzcslb"/>`,
		"fallback": "heroicons-outline:chevron-double-left",
	});
}

export default Component;
