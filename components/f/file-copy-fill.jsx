import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enx00nbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enx00nbbf"/>`,
		"fallback": "ri:file-copy-fill",
	});
}

export default Component;
