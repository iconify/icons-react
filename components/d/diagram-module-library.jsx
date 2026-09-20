import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1m7vbhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg1m7vbhr"/>`,
		"fallback": "ix:diagram-module-library",
	});
}

export default Component;
