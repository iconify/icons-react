import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdh_y_bna.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdh_y_bna"/>`,
		"fallback": "carbon:file-change",
	});
}

export default Component;
