import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox8i1rs_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox8i1rs_p"/>`,
		"fallback": "fxemoji:doubleexclaimationmark",
	});
}

export default Component;
