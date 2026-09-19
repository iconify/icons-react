import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmes9zbiw.css';
import '../../css/h/homzn5bbs.css';
import '../../css/s/s6a_vl58s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmes9zbiw"/><rect class="homzn5bbs"/><rect class="s6a_vl58s"/>`,
		"fallback": "boxicons:align-vertical-space-between-filled",
	});
}

export default Component;
