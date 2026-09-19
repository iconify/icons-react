import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9ohr9txj.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9ohr9txj"/>`,
		"fallback": "fa6-regular:id-badge",
	});
}

export default Component;
