import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4-s3cb7u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4-s3cb7u"/>`,
		"fallback": "marketeq:cursor",
	});
}

export default Component;
