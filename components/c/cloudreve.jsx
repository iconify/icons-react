import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6szscc-u.css';
import '../../css/w/w5t1ykp4g.css';
import '../../css/s/slveivbkv.css';
import '../../css/l/l4067mbwa.css';
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
		"content": `<circle class="w6szscc-u"/><path class="w5t1ykp4g"/><path class="slveivbkv"/><circle class="l4067mbwa"/><path class="qopzznmys"/><path class="gep5gvj9y"/>`,
		"fallback": "selfhst:cloudreve",
	});
}

export default Component;
