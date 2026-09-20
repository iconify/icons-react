import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqu1uhb_e.css';
import '../../css/b/b0zme1q_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqu1uhb_e"/><path class="b0zme1q_s"/>`,
		"fallback": "streamline-freehand:controls-camera-off",
	});
}

export default Component;
