import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/n/ngg1fh.css';
import '../../css/d/d-uxzh.css';
import '../../css/y/y4wbml.css';
import '../../css/i/idmydr.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-20.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ngg1fh"/><path class="d-uxzh iw1iew y4wbml"/><path class="idmydr iw1iew y4wbml"/>`,
		"fallback": "line-md:edit-full-twotone",
	});
}

export default Component;
