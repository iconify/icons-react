import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/snx9u9blb.css';
import '../../css/h/hv9wxdvso.css';
import '../../css/i/ib_y_5qcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="snx9u9blb"/><path class="hv9wxdvso"/><path class="ib_y_5qcd"/></g>`,
		"fallback": "lets-icons:box-light",
	});
}

export default Component;
