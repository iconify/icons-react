import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a058hnfqy.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a058hnfqy"/>`,
		"fallback": "vs:comment",
	});
}

export default Component;
