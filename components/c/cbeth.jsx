import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxzv7ug8a.css';
import '../../css/g/gam-p8bqe.css';
import '../../css/e/ece3hyfmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxzv7ug8a"/><path class="gam-p8bqe"/><path class="ece3hyfmk"/>`,
		"fallback": "token:cbeth",
	});
}

export default Component;
