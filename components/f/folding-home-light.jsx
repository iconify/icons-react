import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxthv2xzn.css';
import '../../css/o/o6zvk8buv.css';
import '../../css/l/lr_3epb6x.css';
import '../../css/r/r8ph69bil.css';
import '../../css/s/shbjhacsf.css';
import '../../css/v/v2t5oviwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxthv2xzn"/><path class="o6zvk8buv"/><path class="lr_3epb6x"/><path class="r8ph69bil"/><path class="shbjhacsf"/><path class="v2t5oviwj"/>`,
		"fallback": "selfhst:folding-home-light",
	});
}

export default Component;
