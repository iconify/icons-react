import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcyw8jb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcyw8jb6r"/>`,
		"fallback": "material-icon-theme:3d",
	});
}

export default Component;
