import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kchaizy7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kchaizy7v"/>`,
		"fallback": "mdi:folder-google-drive",
	});
}

export default Component;
