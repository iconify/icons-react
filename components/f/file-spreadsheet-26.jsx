import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6ojqs_tx.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6ojqs_tx"/>`,
		"fallback": "garden:file-spreadsheet-26",
	});
}

export default Component;
