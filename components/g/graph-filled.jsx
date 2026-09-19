import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bztnfgb8s.css';
import '../../css/p/pwye_sbti.css';
import '../../css/h/h8fcp6xyp.css';
import '../../css/d/d86m1dbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bztnfgb8s"/><rect class="pwye_sbti"/><rect class="h8fcp6xyp"/><rect class="d86m1dbzs"/>`,
		"fallback": "bitcoin-icons:graph-filled",
	});
}

export default Component;
