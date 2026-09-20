import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq5e-62yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq5e-62yy"/>`,
		"fallback": "simple-icons:alphaxiv",
	});
}

export default Component;
