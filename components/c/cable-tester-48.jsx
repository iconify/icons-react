import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsqftbbxf.css';
import '../../css/z/zm89rbh1i.css';
import '../../css/e/e_erz_s4t.css';
import '../../css/p/ptzd2rb1h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsqftbbxf"/><path class="zm89rbh1i"/><path class="e_erz_s4t"/><path class="ptzd2rb1h"/>`,
		"fallback": "energy-icons:cable-tester-48",
	});
}

export default Component;
