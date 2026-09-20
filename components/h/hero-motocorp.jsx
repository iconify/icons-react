import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_i801t3n.css';
import '../../css/l/l2d53np2e.css';
import '../../css/v/vnqx6r6he.css';

const viewBox = {"width":151,"height":170,"left":-57.38,"top":-64.6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_i801t3n"/><path class="l2d53np2e"/><path class="vnqx6r6he"/>`,
		"fallback": "thesvg-color:hero-motocorp",
	});
}

export default Component;
