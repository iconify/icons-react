import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8drxab1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8drxab1f"/>`,
		"fallback": "ix:aas-shell-import-filled",
	});
}

export default Component;
