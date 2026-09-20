import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1mlqtb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1mlqtb8c"/>`,
		"fallback": "tdesign:file-csv-filled",
	});
}

export default Component;
