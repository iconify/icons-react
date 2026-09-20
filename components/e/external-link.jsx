import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzwy0zbjv.css';
import '../../css/j/j7gs3mbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzwy0zbjv"/><path class="j7gs3mbhr"/>`,
		"fallback": "prime:external-link",
	});
}

export default Component;
