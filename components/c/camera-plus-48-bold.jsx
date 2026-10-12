import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2l7e5b5j.css';
import '../../css/z/zqt46prvm.css';
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
		"content": `<path class="k2l7e5b5j"/><path class="zqt46prvm"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:camera-plus-48-bold",
	});
}

export default Component;
