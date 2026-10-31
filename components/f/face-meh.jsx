import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar7nh3bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar7nh3bmu"/>`,
		"fallback": "sidekickicons:face-meh",
	});
}

export default Component;
