import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtfcq9iub.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtfcq9iub"/>`,
		"fallback": "el:file-new",
	});
}

export default Component;
