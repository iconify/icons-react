import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvyr40bsv.css';
import '../../css/g/gm9nibcja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvyr40bsv"/><path class="gm9nibcja"/>`,
		"fallback": "energy-icons:connector-mcs-48",
	});
}

export default Component;
