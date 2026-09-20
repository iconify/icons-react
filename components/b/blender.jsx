import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7cu_u-yk.css';
import '../../css/p/p351x--2q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7cu_u-yk"/><circle class="p351x--2q"/>`,
		"fallback": "material-icon-theme:blender",
	});
}

export default Component;
