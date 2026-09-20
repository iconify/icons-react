import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh2ook0ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh2ook0ql"/>`,
		"fallback": "streamline-sharp:cutter",
	});
}

export default Component;
