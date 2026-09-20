import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2wpoel1n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2wpoel1n"/>`,
		"fallback": "wpf:check-file",
	});
}

export default Component;
