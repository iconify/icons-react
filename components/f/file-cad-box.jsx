import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xloze9r4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xloze9r4a"/>`,
		"fallback": "mdi:file-cad-box",
	});
}

export default Component;
