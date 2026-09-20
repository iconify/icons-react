import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw1_f1dns.css';
import '../../css/w/w5t1ykp4g.css';
import '../../css/s/slveivbkv.css';
import '../../css/t/tlcbsubgk.css';
import '../../css/q/qopzznmys.css';
import '../../css/g/gep5gvj9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bw1_f1dns"/><path class="w5t1ykp4g"/><path class="slveivbkv"/><circle class="tlcbsubgk"/><path class="qopzznmys"/><path class="gep5gvj9y"/>`,
		"fallback": "selfhst:cloudreve",
	});
}

export default Component;
