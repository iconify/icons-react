import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diwypubsb.css';
import '../../css/y/yw1m5wbef.css';
import '../../css/z/zpuo1ebll.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diwypubsb"/><path class="yw1m5wbef"/><path class="zpuo1ebll"/>`,
		"fallback": "energy-icons:currency-exchange-20",
	});
}

export default Component;
