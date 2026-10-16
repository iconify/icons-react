import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bym0aibji.css';
import '../../css/u/uo9vznb2b.css';
import '../../css/l/lydypnbam.css';
import '../../css/g/gm44-xbkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bym0aibji"/><path class="uo9vznb2b"/><path class="lydypnbam"/><path class="gm44-xbkh"/>`,
		"fallback": "energy-icons:hydrogen-bus-48-bold",
	});
}

export default Component;
