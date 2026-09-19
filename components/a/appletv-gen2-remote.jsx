import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9-5_bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf9-5_bmy"/>`,
		"fallback": "cbi:appletv-gen2-remote",
	});
}

export default Component;
