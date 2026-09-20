import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7v_mpb_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7v_mpb_q"/>`,
		"fallback": "streamline-plump:auto-flash-remix",
	});
}

export default Component;
