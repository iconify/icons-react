import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zysq2if3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zysq2if3v"/>`,
		"fallback": "tabler:battery-vertical-2",
	});
}

export default Component;
