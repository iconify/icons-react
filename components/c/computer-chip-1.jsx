import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa86d2bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa86d2bfd"/>`,
		"fallback": "streamline-sharp:computer-chip-1",
	});
}

export default Component;
