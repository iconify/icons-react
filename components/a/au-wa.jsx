import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/n/n4tqjxbwl.css';
import '../../css/b/btthiwsch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><circle class="n4tqjxbwl"/><path class="btthiwsch"/></g>`,
		"fallback": "circle-flags:au-wa",
	});
}

export default Component;
