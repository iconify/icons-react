import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6f5j_qip.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6f5j_qip"/>`,
		"fallback": "thesvg-color:cobol",
	});
}

export default Component;
