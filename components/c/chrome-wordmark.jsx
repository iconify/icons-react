import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr272q-zt.css';
import '../../css/m/mhc-hp51p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wr272q-zt"/><path class="mhc-hp51p"/>`,
		"fallback": "devicon-plain:chrome-wordmark",
	});
}

export default Component;
