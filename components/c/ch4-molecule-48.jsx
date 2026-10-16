import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymr7lm3zo.css';
import '../../css/u/u38gi5bmv.css';
import '../../css/x/xwbtxnr1s.css';
import '../../css/f/fued98b4z.css';
import '../../css/q/qmx9hqbvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymr7lm3zo"/><path class="u38gi5bmv"/><path class="xwbtxnr1s"/><path class="fued98b4z"/><path class="qmx9hqbvj"/>`,
		"fallback": "energy-icons:ch4-molecule-48",
	});
}

export default Component;
