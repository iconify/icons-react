import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyvy0x6vz.css';
import '../../css/n/nh4ls7l6o.css';
import '../../css/f/f_tbp8boy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="fyvy0x6vz"/><ellipse class="nh4ls7l6o"/><path class="f_tbp8boy"/>`,
		"fallback": "catppuccin:bicep",
	});
}

export default Component;
