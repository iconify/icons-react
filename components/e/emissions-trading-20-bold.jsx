import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2arlh74i.css';
import '../../css/g/gfbgo5b2g.css';
import '../../css/o/owlyunb_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2arlh74i"/><path class="gfbgo5b2g"/><path class="owlyunb_h"/>`,
		"fallback": "energy-icons:emissions-trading-20-bold",
	});
}

export default Component;
