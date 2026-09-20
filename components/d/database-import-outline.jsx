import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm8lu6lmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm8lu6lmv"/>`,
		"fallback": "mdi:database-import-outline",
	});
}

export default Component;
