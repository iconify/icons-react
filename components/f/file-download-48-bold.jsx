import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/c/c1zkxgcxn.css';
import '../../css/k/knk18_84q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="c1zkxgcxn"/><path class="knk18_84q"/>`,
		"fallback": "energy-icons:file-download-48-bold",
	});
}

export default Component;
