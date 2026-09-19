import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g97jdgv9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g97jdgv9o"/>`,
		"fallback": "carbon:direction-bear-right-02",
	});
}

export default Component;
