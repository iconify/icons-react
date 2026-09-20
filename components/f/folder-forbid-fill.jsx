import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj_h7sufq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj_h7sufq"/>`,
		"fallback": "ri:folder-forbid-fill",
	});
}

export default Component;
