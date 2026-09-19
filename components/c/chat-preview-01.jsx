import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/ws7tt80dx.css';
import '../../css/u/ufw1mbb_w.css';
import '../../css/m/mphyl5x1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ws7tt80dx"/><path class="ufw1mbb_w"/><path class="mphyl5x1f"/></g>`,
		"fallback": "hugeicons:chat-preview-01",
	});
}

export default Component;
