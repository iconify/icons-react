import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai8hlzasl.css';
import '../../css/y/y-q9b7fwc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai8hlzasl"/><path class="y-q9b7fwc"/>`,
		"fallback": "energy-icons:bed-linen-20",
	});
}

export default Component;
