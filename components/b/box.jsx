import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_iv7psnh.css';
import '../../css/r/rlhcac1kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer y_iv7psnh"/><path class="duoicon-primary-layer rlhcac1kb"/>`,
		"fallback": "duo-icons:box",
	});
}

export default Component;
