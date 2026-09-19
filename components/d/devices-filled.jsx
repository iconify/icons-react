import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as-6o-bsz.css';
import '../../css/x/x48sfiyvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="as-6o-bsz"/><path class="x48sfiyvy"/>`,
		"fallback": "boxicons:devices-filled",
	});
}

export default Component;
