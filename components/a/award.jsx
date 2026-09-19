import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa9s_vb_p.css';
import '../../css/m/mh82_cb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer sa9s_vb_p"/><path class="duoicon-primary-layer mh82_cb0z"/>`,
		"fallback": "duo-icons:award",
	});
}

export default Component;
