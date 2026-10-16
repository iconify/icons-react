import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh8gpb9au.css';
import '../../css/o/op_jlg5nw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh8gpb9au"/><path class="op_jlg5nw"/>`,
		"fallback": "energy-icons:ev-parking-48-bold",
	});
}

export default Component;
