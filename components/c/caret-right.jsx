import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou1lpbckg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou1lpbckg"/>`,
		"fallback": "fluent-mdl2:caret-right",
	});
}

export default Component;
