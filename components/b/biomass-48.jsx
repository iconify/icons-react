import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdoju7bng.css';
import '../../css/v/vbtr2ykcx.css';
import '../../css/z/zkd6-wbyc.css';
import '../../css/h/h11x-xb0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdoju7bng"/><path class="vbtr2ykcx"/><path class="zkd6-wbyc"/><path class="h11x-xb0c"/>`,
		"fallback": "energy-icons:biomass-48",
	});
}

export default Component;
