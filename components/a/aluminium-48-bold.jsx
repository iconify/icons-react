import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnjw03tfc.css';
import '../../css/s/s76963bxh.css';
import '../../css/z/zo3asy96u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnjw03tfc"/><path class="s76963bxh"/><path class="zo3asy96u"/>`,
		"fallback": "energy-icons:aluminium-48-bold",
	});
}

export default Component;
