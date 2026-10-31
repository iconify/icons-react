import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/powor1xqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="powor1xqb"/>`,
		"fallback": "coolicons:briefcase-fill-round",
	});
}

export default Component;
