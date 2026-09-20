import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imlqtwr-v.css';
import '../../css/b/bmvaj0s_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imlqtwr-v"/><path class="bmvaj0s_p"/>`,
		"fallback": "streamline-pixel:email-envelope",
	});
}

export default Component;
