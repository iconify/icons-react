import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grw0rhcqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grw0rhcqy"/>`,
		"fallback": "mdi:file-presentation-box",
	});
}

export default Component;
