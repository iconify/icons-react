import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/oyn5n5zpp.css';
import '../../css/v/vyisv67_x.css';
import '../../css/y/yy2g10ylv.css';
import '../../css/o/o7yly1bai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="oyn5n5zpp"/><path class="vyisv67_x"/><path class="yy2g10ylv"/><path class="o7yly1bai"/></g>`,
		"fallback": "icon-park:index-finger",
	});
}

export default Component;
