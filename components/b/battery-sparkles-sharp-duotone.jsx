import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/ma9f4b4xe.css';
import '../../css/n/n26asvj4t.css';
import '../../css/z/z21esqbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ma9f4b4xe"/><path class="n26asvj4t"/><path class="z21esqbjw"/></g>`,
		"fallback": "keyline-icons:battery-sparkles-sharp-duotone",
	});
}

export default Component;
