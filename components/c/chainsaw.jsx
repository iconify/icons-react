import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eak5m0bzk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eak5m0bzk"/>`,
		"fallback": "pinhead:chainsaw",
	});
}

export default Component;
