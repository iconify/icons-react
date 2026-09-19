import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy67-5b5k.css';
import '../../css/z/z132mnbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy67-5b5k"/><path class="z132mnbgz"/>`,
		"fallback": "boxicons:file-code",
	});
}

export default Component;
