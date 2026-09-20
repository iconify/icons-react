import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfxji_bby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfxji_bby"/>`,
		"fallback": "ix:heat-map-chart",
	});
}

export default Component;
