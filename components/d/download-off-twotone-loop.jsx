import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pxry.css';
import '../../css/u/u0wwls.css';
import '../../css/z/zxndow.css';
import '../../css/o/okiwoc.css';
import '../../css/y/y4wbml.css';
import '../../css/r/rkazsz.css';
import '../../css/b/botfzx.css';
import '../../css/r/r8o-yv.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-vro9sl.css';
import '../../css/s/so-from-20.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1uqrybom"><path class="t5pxry u0wwls zxndow"/><path class="okiwoc t5pxry y4wbml zxndow"/><path class="rkazsz t5pxry y4wbml"/></mask></defs><path mask="url(#SVG1uqrybom)" class="botfzx"/><path class="r8o-yv t5pxry y4wbml"/>`,
		"fallback": "line-md:download-off-twotone-loop",
	});
}

export default Component;
