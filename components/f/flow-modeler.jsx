import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynpf76igj.css';
import '../../css/o/o-oqurbly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynpf76igj"/><path class="o-oqurbly"/>`,
		"fallback": "carbon:flow-modeler",
	});
}

export default Component;
