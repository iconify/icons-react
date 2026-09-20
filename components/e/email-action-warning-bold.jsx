import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd5i1ccgy.css';
import '../../css/b/bp38xibkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd5i1ccgy"/><path class="bp38xibkr"/>`,
		"fallback": "streamline-ultimate:email-action-warning-bold",
	});
}

export default Component;
