import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ampl8-clf.css';
import '../../css/d/d81cmo-oy.css';
import '../../css/i/ijl0gbtvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ampl8-clf"/><path class="d81cmo-oy"/><path class="ijl0gbtvw"/>`,
		"fallback": "energy-icons:import-export-48-bold",
	});
}

export default Component;
