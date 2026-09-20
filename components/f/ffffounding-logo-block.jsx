import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phd1g1bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phd1g1bfj"/>`,
		"fallback": "streamline-logos:ffffounding-logo-block",
	});
}

export default Component;
