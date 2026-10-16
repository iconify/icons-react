import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py9jq5b2b.css';
import '../../css/k/k251r-bph.css';
import '../../css/p/pckuljbwu.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py9jq5b2b"/><path class="k251r-bph"/><path class="pckuljbwu"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:database-x-20",
	});
}

export default Component;
