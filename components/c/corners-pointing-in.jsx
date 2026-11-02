import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxo39ibgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxo39ibgg"/>`,
		"fallback": "sidekickicons:corners-pointing-in",
	});
}

export default Component;
