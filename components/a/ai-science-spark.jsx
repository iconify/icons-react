import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyhvjcbaw.css';
import '../../css/c/cezytaceu.css';
import '../../css/u/uo5lw79nt.css';
import '../../css/f/fe7uu5c9c.css';
import '../../css/o/oyrfe2ber.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyhvjcbaw"/><path class="cezytaceu"/><path class="uo5lw79nt"/><path class="fe7uu5c9c"/><path class="oyrfe2ber"/></g>`,
		"fallback": "streamline-color:ai-science-spark",
	});
}

export default Component;
