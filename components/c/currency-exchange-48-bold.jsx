import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/metmuqbrp.css';
import '../../css/a/aeo--wbrz.css';
import '../../css/m/mr0d03bjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="metmuqbrp"/><path class="aeo--wbrz"/><path class="mr0d03bjj"/>`,
		"fallback": "energy-icons:currency-exchange-48-bold",
	});
}

export default Component;
