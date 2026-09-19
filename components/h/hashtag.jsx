import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3utg6ua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="if3utg6ua"/>`,
		"fallback": "heroicons-solid:hashtag",
	});
}

export default Component;
