import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvw4z98pg.css';
import '../../css/l/luchnh4nb.css';
import '../../css/p/p0dnb-b-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wvw4z98pg"/><circle class="luchnh4nb"/><path class="p0dnb-b-i"/>`,
		"fallback": "famicons:image-outline",
	});
}

export default Component;
