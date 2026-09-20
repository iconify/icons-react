import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohx99ybum.css';
import '../../css/p/pvasu6b8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohx99ybum"/><path class="pvasu6b8z"/>`,
		"fallback": "material-icon-theme:folder-ngrx-store-open",
	});
}

export default Component;
