import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9l7ip.css';
import '../../css/a/a0m25c.css';
import '../../css/e/eup04y.css';
import '../../css/g/g2ouze.css';
import '../../css/p/pl-mjc.css';
import '../../css/x/xxwxit.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9l7ip"/><path class="a0m25c eup04y"/><path class="a0m25c g2ouze"/><path class="a0m25c pl-mjc"/><path class="a0m25c xxwxit"/>`,
		"fallback": "line-md:email-alert-twotone",
	});
}

export default Component;
