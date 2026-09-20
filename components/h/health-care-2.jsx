import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzogth0ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzogth0ei"/>`,
		"fallback": "streamline-sharp:health-care-2",
	});
}

export default Component;
