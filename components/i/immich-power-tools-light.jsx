import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvk743d6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvk743d6d"/>`,
		"fallback": "selfhst:immich-power-tools-light",
	});
}

export default Component;
