import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_aaufbbi.css';
import '../../css/u/um_iy8qqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x_aaufbbi"/><path class="um_iy8qqo"/></g>`,
		"fallback": "iconoir:emoji-look-right",
	});
}

export default Component;
