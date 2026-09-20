import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgn3ynbah.css';
import '../../css/x/x_sht7bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vgn3ynbah"/><path class="x_sht7bpa"/></g>`,
		"fallback": "reicon:arrow",
	});
}

export default Component;
