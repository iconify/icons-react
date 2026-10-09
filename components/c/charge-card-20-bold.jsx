import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhgdkeb9d.css';
import '../../css/e/eosjwh5-i.css';
import '../../css/l/lghv89b9i.css';
import '../../css/g/g2bc94xrn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhgdkeb9d"/><path class="eosjwh5-i"/><path class="lghv89b9i"/><path class="g2bc94xrn"/>`,
		"fallback": "energy-icons:charge-card-20-bold",
	});
}

export default Component;
