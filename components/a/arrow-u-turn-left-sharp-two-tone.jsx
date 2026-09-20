import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3c2rj_zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3c2rj_zs"/>`,
		"fallback": "keyline-icons:arrow-u-turn-left-sharp-two-tone",
	});
}

export default Component;
