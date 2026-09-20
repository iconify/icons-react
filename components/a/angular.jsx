import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq9e_tbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq9e_tbfw"/>`,
		"fallback": "material-icon-theme:angular",
	});
}

export default Component;
