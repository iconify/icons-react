import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyexnnu5k.css';
import '../../css/r/rug9-jejd.css';
import '../../css/c/cm5ecor1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyexnnu5k"/><path class="rug9-jejd"/><path class="cm5ecor1p"/>`,
		"fallback": "ion:documents-sharp",
	});
}

export default Component;
