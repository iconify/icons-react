import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed9bqxbqe.css';
import '../../css/z/z_agvsb7e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed9bqxbqe"/><path class="z_agvsb7e"/>`,
		"fallback": "garden:header-4-20",
	});
}

export default Component;
