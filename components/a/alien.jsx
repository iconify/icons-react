import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nhdm6wmar.css';
import '../../css/a/aa7sjfs7a.css';
import '../../css/s/sj1zgv4na.css';
import '../../css/d/du2493bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nhdm6wmar"/><path class="aa7sjfs7a"/><path class="sj1zgv4na"/><path class="du2493bik"/></g>`,
		"fallback": "streamline-sharp-color:alien",
	});
}

export default Component;
