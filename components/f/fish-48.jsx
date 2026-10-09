import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohpbt_2nc.css';
import '../../css/h/h5dbk_bhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohpbt_2nc"/><path class="h5dbk_bhj"/>`,
		"fallback": "energy-icons:fish-48",
	});
}

export default Component;
