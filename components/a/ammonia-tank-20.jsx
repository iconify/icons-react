import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psgy_eb5i.css';
import '../../css/x/x-nm31bum.css';
import '../../css/u/u9z2pachv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psgy_eb5i"/><path class="x-nm31bum"/><path class="u9z2pachv"/>`,
		"fallback": "energy-icons:ammonia-tank-20",
	});
}

export default Component;
