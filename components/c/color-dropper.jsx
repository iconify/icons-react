import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6u44ac-s.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6u44ac-s"/>`,
		"fallback": "wpf:color-dropper",
	});
}

export default Component;
