import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe3u1kbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe3u1kbqw"/>`,
		"fallback": "withicons:file-text-solid",
	});
}

export default Component;
