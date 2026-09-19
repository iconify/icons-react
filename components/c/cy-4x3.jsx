import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/m/m3lg6r39d.css';
import '../../css/u/ulr3z_42u.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path id="SVGG01l0bWp" class="m3lg6r39d"/><use width="100%" height="100%" href="#SVGG01l0bWp" transform="matrix(-1 0 0 1 593.7 0)"/><path class="ulr3z_42u"/>`,
		"fallback": "flag:cy-4x3",
	});
}

export default Component;
