import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am6f-cg6s.css';
import '../../css/h/hfov4zyhi.css';
import '../../css/m/miebbgx2k.css';
import '../../css/f/fcypl9bnz.css';
import '../../css/i/igqiqpbix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="am6f-cg6s"/><path class="hfov4zyhi"/><path class="miebbgx2k"/><path class="fcypl9bnz"/><path class="igqiqpbix"/>`,
		"fallback": "streamline:computer-database-server-2-server-network-internet",
	});
}

export default Component;
