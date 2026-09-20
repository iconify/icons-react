import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_8dvglkn.css';
import '../../css/g/gjo-eg8gx.css';
import '../../css/r/rqz-hwa9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_8dvglkn"/><path class="gjo-eg8gx"/><path class="rqz-hwa9s"/>`,
		"fallback": "material-icon-theme:folder-verdaccio",
	});
}

export default Component;
