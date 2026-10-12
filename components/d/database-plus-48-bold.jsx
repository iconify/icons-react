import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2ioum2-g.css';
import '../../css/k/k7bxcbctl.css';
import '../../css/z/z34g1fbbc.css';
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
		"content": `<path class="i2ioum2-g"/><path class="k7bxcbctl"/><path class="z34g1fbbc"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:database-plus-48-bold",
	});
}

export default Component;
