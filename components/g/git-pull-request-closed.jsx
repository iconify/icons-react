import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d06wxu63j.css';
import '../../css/h/h6pp3dbux.css';
import '../../css/x/xgi6hfb6n.css';
import '../../css/j/js9045b9u.css';
import '../../css/p/pi42ldfhp.css';
import '../../css/j/j2b2ybt9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d06wxu63j wm-shadow"/><path class="h6pp3dbux"/><path class="xgi6hfb6n"/><path class="js9045b9u"/><path class="pi42ldfhp"/><path class="j2b2ybt9k wm-s"/></g>`,
		"fallback": "withicons-retro:git-pull-request-closed",
	});
}

export default Component;
