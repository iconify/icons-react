import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxny0p36e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxny0p36e"/>`,
		"fallback": "tabler:chart-area",
	});
}

export default Component;
