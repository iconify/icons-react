import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmkebn1_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmkebn1_s"/>`,
		"fallback": "mingcute:file-code-line",
	});
}

export default Component;
