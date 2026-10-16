import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twga4rbxo.css';
import '../../css/l/ltcgo_b2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twga4rbxo"/><path class="ltcgo_b2x"/>`,
		"fallback": "energy-icons:brine-pond-48",
	});
}

export default Component;
