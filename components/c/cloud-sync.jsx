import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mnu15ok9c.css';
import '../../css/m/my73ugmzy.css';
import '../../css/w/wz2quuang.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mnu15ok9c"/><path class="my73ugmzy"/><path class="wz2quuang"/></g>`,
		"fallback": "iconoir:cloud-sync",
	});
}

export default Component;
