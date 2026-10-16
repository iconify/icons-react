import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3cm5wgot.css';
import '../../css/n/n3396pgch.css';
import '../../css/n/n-sk7ob6c.css';
import '../../css/r/r243x0bvm.css';
import '../../css/u/uve5exj4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3cm5wgot"/><path class="n3396pgch"/><path class="n-sk7ob6c"/><path class="r243x0bvm"/><path class="uve5exj4g"/>`,
		"fallback": "energy-icons:busbar-20-bold",
	});
}

export default Component;
