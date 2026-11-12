import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp79mfbbx.css';
import '../../css/w/wkurt-npl.css';
import '../../css/g/gk6duor4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp79mfbbx"/><path class="wkurt-npl"/><path class="gk6duor4d"/>`,
		"fallback": "selfhst:calico-light",
	});
}

export default Component;
