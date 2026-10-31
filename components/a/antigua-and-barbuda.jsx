import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh2693boa.css';
import '../../css/f/fi8uxkbev.css';
import '../../css/w/w2vxx8m4b.css';
import '../../css/h/hbqk-zhur.css';
import '../../css/p/pwu498b-u.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh2693boa"/><path class="fi8uxkbev"/><path class="w2vxx8m4b"/><path class="hbqk-zhur"/><path class="pwu498b-u"/>`,
		"fallback": "tabler-flags:antigua-and-barbuda",
	});
}

export default Component;
