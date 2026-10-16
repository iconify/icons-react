import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tau-1emog.css';
import '../../css/n/no1zxzbso.css';
import '../../css/n/n23jidc0m.css';
import '../../css/e/equl3cbqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tau-1emog"/><path class="no1zxzbso"/><path class="n23jidc0m"/><path class="equl3cbqk"/>`,
		"fallback": "energy-icons:export-cable-48-bold",
	});
}

export default Component;
