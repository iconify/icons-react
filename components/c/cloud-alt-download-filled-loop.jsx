import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxsk5z.css';
import '../../css/n/naq--k.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-1mdu6d.css';
import '../../css/d/d-360tni.css';
import '../../css/d/d-ag_l0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNTjAMdeN"><path class="fxsk5z"/><path class="naq--k"/></mask></defs><path mask="url(#SVGNTjAMdeN)" class="botfzx"/>`,
		"fallback": "line-md:cloud-alt-download-filled-loop",
	});
}

export default Component;
