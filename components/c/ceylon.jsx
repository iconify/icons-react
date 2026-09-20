import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/p/pshr00bvs.css';
import '../../css/v/vw7nbibyx.css';
import '../../css/o/okzjhjbnf.css';
import '../../css/m/mv0xm5bnb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGop6VgDeN" cx="93.44" cy="1113.51" r="69.83" gradientTransform="matrix(1 0 0 -1 0 1148.01)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="pshr00bvs"/></radialGradient></defs><path class="vw7nbibyx"/><path class="okzjhjbnf"/><path fill="url(#SVGop6VgDeN)" class="mv0xm5bnb"/>`,
		"fallback": "thesvg-color:ceylon",
	});
}

export default Component;
