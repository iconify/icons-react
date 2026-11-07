import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvqw1eblr.css';
import '../../css/b/bugs1lbja.css';
import '../../css/w/wh6_lm8cy.css';
import '../../css/i/ik78sgb1x.css';
import '../../css/n/n4bf-vlvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvqw1eblr"/><path class="bugs1lbja"/><path class="wh6_lm8cy"/><path class="ik78sgb1x"/><path class="n4bf-vlvt"/>`,
		"fallback": "solar:gamepad-old-bold-duotone",
	});
}

export default Component;
