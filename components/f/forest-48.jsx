import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-qhqbb4r.css';
import '../../css/a/a-8x79b-r.css';
import '../../css/o/oxpdu9biv.css';
import '../../css/w/wfx3nk7mg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-qhqbb4r"/><path class="a-8x79b-r"/><path class="oxpdu9biv"/><path class="wfx3nk7mg"/>`,
		"fallback": "energy-icons:forest-48",
	});
}

export default Component;
