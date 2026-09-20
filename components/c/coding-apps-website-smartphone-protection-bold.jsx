import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuw1l-bwe.css';
import '../../css/n/n1trkpqad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuw1l-bwe"/><path class="n1trkpqad"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-smartphone-protection-bold",
	});
}

export default Component;
