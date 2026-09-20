import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj437j.css';
import '../../css/i/iw1iew.css';
import '../../css/j/j4_0cv.css';
import '../../css/y/y4wbml.css';
import '../../css/b/b46h1j.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
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
		"content": `<path class="cj437j iw1iew"/><path class="iw1iew j4_0cv y4wbml"/><path class="b46h1j iw1iew y4wbml"/>`,
		"fallback": "line-md:arrow-right-square-twotone",
	});
}

export default Component;
