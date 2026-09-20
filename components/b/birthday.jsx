import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6vjh8byz.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6vjh8byz"/>`,
		"fallback": "wpf:birthday",
	});
}

export default Component;
