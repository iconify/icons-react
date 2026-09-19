import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ori4jfh0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ori4jfh0j"/>`,
		"fallback": "boxicons:bacteria-filled",
	});
}

export default Component;
