import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gpars9bzu.css';
import '../../css/n/n1-23kb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gpars9bzu"/><path class="n1-23kb4a"/></g>`,
		"fallback": "hugeicons:cabinet-02",
	});
}

export default Component;
