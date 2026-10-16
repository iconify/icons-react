import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdjudybvz.css';
import '../../css/v/vzvirib9h.css';
import '../../css/d/d4kkk8bor.css';
import '../../css/k/kbafubqhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdjudybvz"/><path class="vzvirib9h"/><path class="d4kkk8bor"/><path class="kbafubqhu"/>`,
		"fallback": "energy-icons:airborne-wind-48-bold",
	});
}

export default Component;
