import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfk2sab_g.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfk2sab_g"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:check-circle-outline",
	});
}

export default Component;
