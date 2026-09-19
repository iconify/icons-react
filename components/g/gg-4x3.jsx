import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5vgbcb_s.css';
import '../../css/m/m8m6yp-2i.css';
import '../../css/y/yhn9evkfi.css';
import '../../css/d/ddf9bdcop.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5vgbcb_s"/><path class="m8m6yp-2i"/><path class="yhn9evkfi"/><path id="SVGAPx0gdzY" class="ddf9bdcop"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(90 320 240)"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(-90 320 240)"/><use width="36" height="24" href="#SVGAPx0gdzY" transform="rotate(180 320 240)"/>`,
		"fallback": "flag:gg-4x3",
	});
}

export default Component;
