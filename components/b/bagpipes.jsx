import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spnx_mb2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spnx_mb2q"/>`,
		"fallback": "game-icons:bagpipes",
	});
}

export default Component;
