import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0s3pwbiu.css';
import '../../css/f/f6tq_mbll.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0s3pwbiu"/><path class="f6tq_mbll"/>`,
		"fallback": "ei:cart",
	});
}

export default Component;
