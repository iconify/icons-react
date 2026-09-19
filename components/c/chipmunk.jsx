import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywu4_4b-u.css';
import '../../css/m/me6xtzbri.css';
import '../../css/z/z3fiy1goj.css';
import '../../css/x/x_umbtwhv.css';
import '../../css/i/ijtms13ik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywu4_4b-u"/><path class="me6xtzbri"/><path class="z3fiy1goj"/><path class="x_umbtwhv"/><path class="ijtms13ik"/>`,
		"fallback": "fxemoji:chipmunk",
	});
}

export default Component;
