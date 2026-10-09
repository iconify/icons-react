import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzr7ecx0m.css';
import '../../css/l/lizp2ibyj.css';
import '../../css/v/vph4g2brq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzr7ecx0m"/><path class="lizp2ibyj"/><path class="vph4g2brq"/>`,
		"fallback": "energy-icons:cogs-48-bold",
	});
}

export default Component;
