import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggbpz7_sl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggbpz7_sl"/>`,
		"fallback": "ep:document-checked",
	});
}

export default Component;
