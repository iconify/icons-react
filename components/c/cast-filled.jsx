import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lud_oq9-e.css';
import '../../css/f/f3cbn2boa.css';
import '../../css/q/q8o975bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lud_oq9-e"/><path class="f3cbn2boa"/><path class="q8o975bft"/>`,
		"fallback": "boxicons:cast-filled",
	});
}

export default Component;
