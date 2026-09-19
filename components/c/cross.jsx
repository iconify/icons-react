import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gobf57txj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gobf57txj"/>`,
		"fallback": "at-icons:cross",
	});
}

export default Component;
