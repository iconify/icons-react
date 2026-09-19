import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6-nmp8oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6-nmp8oa"/>`,
		"fallback": "iconamoon:do-undo-light",
	});
}

export default Component;
