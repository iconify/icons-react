import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfq0e50ja.css';
import '../../css/n/nc-7gwy-h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfq0e50ja"/><path class="nc-7gwy-h"/>`,
		"fallback": "ep:hide",
	});
}

export default Component;
