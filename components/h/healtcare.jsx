import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mmdspp3nh.css';
import '../../css/b/bybxiz3os.css';
import '../../css/z/z2p-kumju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mmdspp3nh"/><path class="bybxiz3os"/><path class="z2p-kumju"/></g>`,
		"fallback": "hugeicons:healtcare",
	});
}

export default Component;
