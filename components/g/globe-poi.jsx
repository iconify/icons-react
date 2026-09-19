import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj_8lcczn.css';
import '../../css/x/xy4c9hbng.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj_8lcczn"/><path class="xy4c9hbng"/>`,
		"fallback": "gis:globe-poi",
	});
}

export default Component;
