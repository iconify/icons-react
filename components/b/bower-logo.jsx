import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/guzf4q3zb.css';
import '../../css/x/xxqi1k1ru.css';
import '../../css/m/m8ou24kwg.css';
import '../../css/s/svi4xkbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="guzf4q3zb"/><path class="xxqi1k1ru"/><path class="m8ou24kwg"/><path class="svi4xkbvv"/></g>`,
		"fallback": "streamline-logos:bower-logo",
	});
}

export default Component;
