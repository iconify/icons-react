import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7u9rlhtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7u9rlhtj"/>`,
		"fallback": "ion:android-apps",
	});
}

export default Component;
