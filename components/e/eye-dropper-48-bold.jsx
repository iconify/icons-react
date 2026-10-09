import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlosulb6e.css';
import '../../css/b/b9isaca6x.css';
import '../../css/b/bfo_vpyhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlosulb6e"/><path class="b9isaca6x"/><path class="bfo_vpyhu"/>`,
		"fallback": "energy-icons:eye-dropper-48-bold",
	});
}

export default Component;
