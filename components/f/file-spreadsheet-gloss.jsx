import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi493krga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi493krga"/>`,
		"fallback": "withicons:file-spreadsheet-gloss",
	});
}

export default Component;
