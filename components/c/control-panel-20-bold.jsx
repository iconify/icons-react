import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bprebx11j.css';
import '../../css/o/ofznhc5pn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bprebx11j"/><path class="ofznhc5pn"/>`,
		"fallback": "energy-icons:control-panel-20-bold",
	});
}

export default Component;
