import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egdt4zx1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egdt4zx1s"/>`,
		"fallback": "vadivam:file-spreadsheet",
	});
}

export default Component;
