import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzgek-b6u.css';
import '../../css/e/eoe8racut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nzgek-b6u"/><path class="eoe8racut"/></g>`,
		"fallback": "lucide:bug",
	});
}

export default Component;
