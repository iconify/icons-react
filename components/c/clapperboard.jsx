import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noo3asbky.css';
import '../../css/c/c9y0u6eai.css';
import '../../css/l/lz_1ujuza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noo3asbky"/><path class="c9y0u6eai"/><path class="lz_1ujuza"/>`,
		"fallback": "fxemoji:clapperboard",
	});
}

export default Component;
