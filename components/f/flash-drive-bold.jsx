import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyqf4h4lk.css';
import '../../css/w/wp__jovdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyqf4h4lk"/><path class="wp__jovdx"/>`,
		"fallback": "streamline-ultimate:flash-drive-bold",
	});
}

export default Component;
