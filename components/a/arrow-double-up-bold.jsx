import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehf9i8bjq.css';
import '../../css/k/k5x1h1nos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehf9i8bjq"/><path class="k5x1h1nos"/>`,
		"fallback": "streamline-ultimate:arrow-double-up-bold",
	});
}

export default Component;
