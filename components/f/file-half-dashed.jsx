import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7hb04whw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7hb04whw"/>`,
		"fallback": "fa7-solid:file-half-dashed",
	});
}

export default Component;
