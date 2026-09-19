import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbv0mj7_p.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbv0mj7_p"/>`,
		"fallback": "fa-solid:file-upload",
	});
}

export default Component;
