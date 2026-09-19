import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anpr5tboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anpr5tboh"/>`,
		"fallback": "hugeicons:download-01",
	});
}

export default Component;
