import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcstzfbcb.css';
import '../../css/k/kosow7izm.css';
import '../../css/f/fav9ajbay.css';
import '../../css/d/d5e8mpb5y.css';
import '../../css/c/chdcihjie.css';
import '../../css/y/y4k01f_dy.css';
import '../../css/a/ar0qb6ayo.css';

const viewBox = {"width":164,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcstzfbcb"/><path class="kosow7izm"/><path class="fav9ajbay"/><path class="d5e8mpb5y"/><path class="chdcihjie"/><path class="y4k01f_dy"/><path class="ar0qb6ayo"/>`,
		"fallback": "thesvg-color:homebrew",
	});
}

export default Component;
