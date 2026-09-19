import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc1enib9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oc1enib9k"/>`,
		"fallback": "carbon:dot-mark",
	});
}

export default Component;
