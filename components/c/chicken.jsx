import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtirc_mzq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtirc_mzq"/>`,
		"fallback": "whh:chicken",
	});
}

export default Component;
