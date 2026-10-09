import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_hp_w4i.css';
import '../../css/o/ort250bot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_hp_w4i"/><path class="ort250bot"/>`,
		"fallback": "energy-icons:fuel-pump-48-bold",
	});
}

export default Component;
