import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os05-0bel.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os05-0bel"/>`,
		"fallback": "uiw:file-excel",
	});
}

export default Component;
