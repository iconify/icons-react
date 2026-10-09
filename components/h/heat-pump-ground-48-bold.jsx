import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce6ljt2_d.css';
import '../../css/g/gpwzcjb5p.css';
import '../../css/d/d9livjodx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce6ljt2_d"/><path class="gpwzcjb5p"/><path class="d9livjodx"/>`,
		"fallback": "energy-icons:heat-pump-ground-48-bold",
	});
}

export default Component;
