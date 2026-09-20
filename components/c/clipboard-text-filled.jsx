import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_lrp7rms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_lrp7rms"/>`,
		"fallback": "tabler:clipboard-text-filled",
	});
}

export default Component;
