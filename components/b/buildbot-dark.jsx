import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibe4v6buj.css';
import '../../css/o/onpn3_b3n.css';
import '../../css/m/m-eeiib0i.css';
import '../../css/w/wagv089wb.css';
import '../../css/e/e64ypnbje.css';
import '../../css/v/vmeo7bc7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibe4v6buj"/><path class="onpn3_b3n"/><path class="m-eeiib0i"/><path class="wagv089wb"/><path class="e64ypnbje"/><path class="vmeo7bc7y"/>`,
		"fallback": "selfhst:buildbot-dark",
	});
}

export default Component;
