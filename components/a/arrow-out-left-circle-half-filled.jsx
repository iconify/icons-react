import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo07tbb9o.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo07tbb9o"/><path class="jgmlxzbvj"/>`,
		"fallback": "boxicons:arrow-out-left-circle-half-filled",
	});
}

export default Component;
