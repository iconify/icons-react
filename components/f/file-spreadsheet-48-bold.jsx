import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/q/qg5agn21g.css';
import '../../css/i/ilk5bdcug.css';
import '../../css/x/xuqxf6j_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="qg5agn21g"/><path class="ilk5bdcug"/><path class="xuqxf6j_b"/>`,
		"fallback": "energy-icons:file-spreadsheet-48-bold",
	});
}

export default Component;
