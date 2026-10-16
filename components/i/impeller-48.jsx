import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen2agbyu.css';
import '../../css/h/hb4ovmb-c.css';
import '../../css/o/o4r99wb0u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen2agbyu"/><path class="hb4ovmb-c"/><path class="o4r99wb0u"/>`,
		"fallback": "energy-icons:impeller-48",
	});
}

export default Component;
