import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4x8k8clu.css';
import '../../css/k/kiv3_z61q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4x8k8clu"/><path class="kiv3_z61q"/>`,
		"fallback": "energy-icons:dew-20",
	});
}

export default Component;
