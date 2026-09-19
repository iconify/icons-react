import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/w/wvppcgj3a.css';
import '../../css/y/ygdg4sdhg.css';
import '../../css/e/e2xibjbip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path class="wvppcgj3a"/><path class="ygdg4sdhg"/><path id="SVGHv4375Wk" class="e2xibjbip"/><use width="36" height="24" href="#SVGHv4375Wk" transform="matrix(0 1.06667 -.9375 0 496 -17)"/><use width="36" height="24" href="#SVGHv4375Wk" transform="matrix(0 -1.06667 .9375 0 16 529)"/><use width="36" height="24" href="#SVGHv4375Wk" transform="rotate(180 256 256)"/>`,
		"fallback": "flag:gg-1x1",
	});
}

export default Component;
