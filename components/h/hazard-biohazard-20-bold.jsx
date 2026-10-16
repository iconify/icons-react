import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcia1ds6l.css';
import '../../css/u/u8ausac2g.css';
import '../../css/x/xufwpsbtx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcia1ds6l"/><path class="u8ausac2g"/><path class="xufwpsbtx"/>`,
		"fallback": "energy-icons:hazard-biohazard-20-bold",
	});
}

export default Component;
