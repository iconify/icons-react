import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0cnxybhb.css';
import '../../css/q/qeky-4bsk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0cnxybhb"/><path class="qeky-4bsk"/>`,
		"fallback": "garden:cutlery-stroke-20",
	});
}

export default Component;
