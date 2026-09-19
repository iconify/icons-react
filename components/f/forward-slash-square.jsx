import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6jwd8c5d.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6jwd8c5d"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:forward-slash-square",
	});
}

export default Component;
