import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv1wf3b6f.css';
import '../../css/g/gwcvmlj-e.css';
import '../../css/q/q_y0g-4dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv1wf3b6f"/><path class="gwcvmlj-e"/><path class="q_y0g-4dq"/>`,
		"fallback": "mage:inbox-upload-fill",
	});
}

export default Component;
