import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0h2eib2p.css';
import '../../css/i/i36e9bn3a.css';
import '../../css/t/tj4rgd3th.css';
import '../../css/h/hi_4q9gft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0h2eib2p"/><path class="i36e9bn3a"/><path class="tj4rgd3th"/><g transform="translate(-46.2 72.8)scale(.7886)"><g id="SVG7UmDXcTu" transform="matrix(80 0 0 80 160 240)"><path id="SVGV4UZXcSz" transform="rotate(18 0 -1)" class="hi_4q9gft"/><use width="100%" height="100%" href="#SVGV4UZXcSz" transform="scale(-1 1)"/></g><use width="100%" height="100%" href="#SVG7UmDXcTu" transform="rotate(72 160 240)"/><use width="100%" height="100%" href="#SVG7UmDXcTu" transform="rotate(144 160 240)"/><use width="100%" height="100%" href="#SVG7UmDXcTu" transform="rotate(-144 160 240)"/><use width="100%" height="100%" href="#SVG7UmDXcTu" transform="rotate(-72 160 240)"/></g>`,
		"fallback": "flag:gw-1x1",
	});
}

export default Component;
