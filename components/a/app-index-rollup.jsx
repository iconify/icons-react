import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upyruzb_p.css';
import '../../css/l/lnp8jkb8z.css';
import '../../css/y/yyfkiabuo.css';
import '../../css/r/r_-7497pi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upyruzb_p"/><path class="lnp8jkb8z"/><path class="ouiIcon__fillSecondary yyfkiabuo"/><path class="r_-7497pi"/>`,
		"fallback": "oui:app-index-rollup",
	});
}

export default Component;
