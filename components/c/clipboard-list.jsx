import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb00oo3bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb00oo3bp"/>`,
		"fallback": "vadivam:clipboard-list",
	});
}

export default Component;
