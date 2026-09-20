import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rmsnzkb8f.css';
import '../../css/b/bt78svp2h.css';
import '../../css/s/s9ygskb2h.css';
import '../../css/u/u2nxajq-r.css';
import '../../css/i/ipsxfcbet.css';
import '../../css/i/iv8w_zbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rmsnzkb8f"/><path class="bt78svp2h"/><circle class="s9ygskb2h"/><path class="u2nxajq-r"/><path class="ipsxfcbet"/><circle class="iv8w_zbzh"/></g>`,
		"fallback": "lucide-lab:coins-exchange",
	});
}

export default Component;
