import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecl2_sbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecl2_sbxc"/>`,
		"fallback": "cbi:chromecast",
	});
}

export default Component;
