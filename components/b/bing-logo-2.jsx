import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phc95vc3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phc95vc3b"/>`,
		"fallback": "streamline-logos:bing-logo-2",
	});
}

export default Component;
