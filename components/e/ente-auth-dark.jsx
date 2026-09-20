import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i093s-bce.css';
import '../../css/c/cawcmqbki.css';
import '../../css/f/fk33h5fcb.css';
import '../../css/i/i7ja3-5jo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i093s-bce"/><path class="cawcmqbki"/><path class="fk33h5fcb"/><path class="i7ja3-5jo"/>`,
		"fallback": "selfhst:ente-auth-dark",
	});
}

export default Component;
