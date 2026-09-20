import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_zl1tdsh.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_zl1tdsh"/>`,
		"fallback": "wpf:empty-battery",
	});
}

export default Component;
