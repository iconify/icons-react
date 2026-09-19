import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyib19brx.css';
import '../../css/z/z477j3bdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyib19brx"/><rect class="z477j3bdr"/>`,
		"fallback": "famicons:archive",
	});
}

export default Component;
