import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nprmtcb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nprmtcb4t"/>`,
		"fallback": "cbi:friends-of-hue-aurora-dimmer-switch-alt",
	});
}

export default Component;
