import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bixh1wb9y.css';
import '../../css/h/hzjf5hkxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bixh1wb9y"/><path class="hzjf5hkxd"/>`,
		"fallback": "energy-icons:draught-proofing-20-bold",
	});
}

export default Component;
