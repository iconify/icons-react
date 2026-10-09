import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eroh1ib1d.css';
import '../../css/e/ekmyd2l1t.css';
import '../../css/v/vdkkqgbeg.css';
import '../../css/v/vlrk2yboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eroh1ib1d"/><path class="ekmyd2l1t"/><path class="vdkkqgbeg"/><path class="vlrk2yboz"/>`,
		"fallback": "energy-icons:hydrogen-tank-48-bold",
	});
}

export default Component;
