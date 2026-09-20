import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiyi5t_0v.css';
import '../../css/u/ufh9qkbxk.css';
import '../../css/n/naagimbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiyi5t_0v"/><path class="ufh9qkbxk"/><path class="naagimbyi"/>`,
		"fallback": "material-icon-theme:cmake",
	});
}

export default Component;
