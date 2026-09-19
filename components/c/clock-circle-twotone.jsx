import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv_brepse.css';
import '../../css/h/h_z_3w4_i.css';
import '../../css/a/aj0h0o7yi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv_brepse"/><path class="h_z_3w4_i"/><path class="aj0h0o7yi"/>`,
		"fallback": "ant-design:clock-circle-twotone",
	});
}

export default Component;
