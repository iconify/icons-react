import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/n74r0r.css';
import '../../css/c/czadwe.css';
import '../../css/y/y4wbml.css';
import '../../css/i/i--0rr.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/sw-cnj-zb.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew n74r0r"/><path class="czadwe iw1iew y4wbml"/><path class="i--0rr iw1iew y4wbml"/>`,
		"fallback": "line-md:alert-twotone-loop",
	});
}

export default Component;
