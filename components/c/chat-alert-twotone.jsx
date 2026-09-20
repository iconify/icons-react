import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/p/ppfqyn.css';
import '../../css/p/pfsmgv.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zahr3u.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ppfqyn"/><path class="iw1iew pfsmgv y4wbml"/><path class="iw1iew y4wbml zahr3u"/>`,
		"fallback": "line-md:chat-alert-twotone",
	});
}

export default Component;
