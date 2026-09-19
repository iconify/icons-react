import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajs9rzzua.css';
import '../../css/f/fxfivubid.css';
import '../../css/t/tjvtkxb5w.css';
import '../../css/r/r-ebtoe7s.css';
import '../../css/v/vl0de7b7b.css';
import '../../css/r/raj4o-bqb.css';
import '../../css/o/ozjrs1bwh.css';
import '../../css/k/k45gkey6x.css';
import '../../css/q/qykh8fb4w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVG4yDWPevl"><path class="ajs9rzzua"/></clipPath><clipPath id="SVGpWR2VccD"><path class="fxfivubid"/></clipPath><linearGradient id="SVG93BJ0K5v" x1="209.315" x2="65.928" y1="46.282" y2="270.993" gradientTransform="matrix(.26228 0 0 .23432 26.588 .345)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tjvtkxb5w"/><stop offset="1" class="r-ebtoe7s"/></linearGradient></defs><path class="vl0de7b7b"/><path class="raj4o-bqb"/><g clip-path="url(#SVG4yDWPevl)"><path class="ozjrs1bwh"/></g><path class="k45gkey6x"/><g clip-path="url(#SVGpWR2VccD)"><path fill="url(#SVG93BJ0K5v)" class="qykh8fb4w"/></g>`,
		"fallback": "devicon:gitpod-wordmark",
	});
}

export default Component;
