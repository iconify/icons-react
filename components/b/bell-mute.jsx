import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvs0_tbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvs0_tbos"/>`,
		"fallback": "pixel:bell-mute",
	});
}

export default Component;
