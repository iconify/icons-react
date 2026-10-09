import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2yz0-bpw.css';
import '../../css/g/gnrh5itid.css';
import '../../css/f/fy2_l9k3b.css';
import '../../css/n/nqfv5ob5a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2yz0-bpw"/><path class="gnrh5itid"/><path class="fy2_l9k3b"/><path class="nqfv5ob5a"/>`,
		"fallback": "energy-icons:chalet-20",
	});
}

export default Component;
