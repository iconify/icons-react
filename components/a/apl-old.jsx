import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7t3zob6i.css';

const viewBox = {"width":575,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7t3zob6i"/>`,
		"fallback": "file-icons:apl-old",
	});
}

export default Component;
