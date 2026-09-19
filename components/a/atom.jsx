import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa5cnubml.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa5cnubml"/>`,
		"fallback": "fa7-solid:atom",
	});
}

export default Component;
