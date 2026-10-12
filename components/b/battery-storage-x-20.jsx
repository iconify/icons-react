import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwvkumbtq.css';
import '../../css/d/dgoos-asp.css';
import '../../css/e/edxwc44sq.css';
import '../../css/l/lb00gu55i.css';
import '../../css/l/lzmnrrp8b.css';
import '../../css/m/mxz5qbb3v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwvkumbtq"/><path class="dgoos-asp"/><path class="edxwc44sq"/><path class="lb00gu55i"/><path class="lzmnrrp8b"/><path class="mxz5qbb3v"/>`,
		"fallback": "energy-icons:battery-storage-x-20",
	});
}

export default Component;
