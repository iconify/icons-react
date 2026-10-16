import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdltw8kvl.css';
import '../../css/x/x-t9vyu4u.css';
import '../../css/m/mdhfcqbdq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdltw8kvl"/><path class="x-t9vyu4u"/><path class="mdhfcqbdq"/>`,
		"fallback": "energy-icons:blade-pitch-48-bold",
	});
}

export default Component;
