import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehr5pjbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehr5pjbxl"/>`,
		"fallback": "noviair-light:file-spreadsheet-x",
	});
}

export default Component;
