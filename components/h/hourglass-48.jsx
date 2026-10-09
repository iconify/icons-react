import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbfsj092o.css';
import '../../css/j/jc99_77ng.css';
import '../../css/n/n994qc39b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbfsj092o"/><path class="jc99_77ng"/><path class="n994qc39b"/>`,
		"fallback": "energy-icons:hourglass-48",
	});
}

export default Component;
