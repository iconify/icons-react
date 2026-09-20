import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhia4tbtk.css';
import '../../css/h/h3dyv0bzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhia4tbtk"/><path class="h3dyv0bzd"/></g>`,
		"fallback": "streamline-ultimate-color:currency-pound",
	});
}

export default Component;
