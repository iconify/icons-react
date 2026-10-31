import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o577v7d3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o577v7d3v"/>`,
		"fallback": "vadivam:emirati-dirham",
	});
}

export default Component;
