import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obb-habqc.css';
import '../../css/p/pb3usgw0j.css';
import '../../css/q/qaena785d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obb-habqc"/><path class="pb3usgw0j"/><path class="qaena785d"/>`,
		"fallback": "energy-icons:earth-layers-20-bold",
	});
}

export default Component;
