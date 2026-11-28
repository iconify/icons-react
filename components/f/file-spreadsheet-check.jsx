import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp13cjb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp13cjb6a"/>`,
		"fallback": "noviair-light:file-spreadsheet-check",
	});
}

export default Component;
