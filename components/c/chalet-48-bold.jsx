import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrnno4lpy.css';
import '../../css/q/qr4uhui_c.css';
import '../../css/f/fk2gskbbg.css';
import '../../css/v/v0e3hepfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrnno4lpy"/><path class="qr4uhui_c"/><path class="fk2gskbbg"/><path class="v0e3hepfi"/>`,
		"fallback": "energy-icons:chalet-48-bold",
	});
}

export default Component;
