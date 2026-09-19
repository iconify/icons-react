import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un6md_v2b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un6md_v2b"/>`,
		"fallback": "carbon:arrange-vertical",
	});
}

export default Component;
