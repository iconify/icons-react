import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsr76kaca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsr76kaca"/>`,
		"fallback": "codicon:go-to-editing-session",
	});
}

export default Component;
