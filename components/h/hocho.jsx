import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhl50ubkh.css';
import '../../css/s/s05wzqbji.css';
import '../../css/t/ti-1rqbya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhl50ubkh"/><path class="s05wzqbji"/><path class="ti-1rqbya"/>`,
		"fallback": "fxemoji:hocho",
	});
}

export default Component;
