import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lks628r3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lks628r3v"/>`,
		"fallback": "mdi:arrow-compress-all",
	});
}

export default Component;
