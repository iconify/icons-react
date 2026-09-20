import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/r/rs9o5v.css';
import '../../css/r/rje0ii.css';
import '../../css/y/y4wbml.css';
import '../../css/s/sydjzg.css';
import '../../css/e/e7acus.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
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
		"content": `<path class="iw1iew rs9o5v"/><path class="iw1iew rje0ii y4wbml"/><path class="iw1iew sydjzg y4wbml"/><path class="e7acus iw1iew y4wbml"/>`,
		"fallback": "line-md:emoji-smile-wink-twotone",
	});
}

export default Component;
