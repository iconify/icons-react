import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4gm5vbqz.css';
import '../../css/j/jw4xvqyjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4gm5vbqz"/><path class="jw4xvqyjq"/>`,
		"fallback": "mingcute:file-security-fill",
	});
}

export default Component;
