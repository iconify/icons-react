import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggjbj35_l.css';
import '../../css/z/zy7ka5dsb.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggjbj35_l"/><path class="zy7ka5dsb"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:image-plus-48-bold",
	});
}

export default Component;
