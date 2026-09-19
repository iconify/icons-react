import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fg7qoebth.css';
import '../../css/r/rcsln0q1b.css';
import '../../css/d/dyrp3tsfw.css';
import '../../css/w/wm8r90bpm.css';
import '../../css/f/f1ukjqbtv.css';
import '../../css/d/d6pxd4b4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fg7qoebth"/><path class="rcsln0q1b"/><path class="dyrp3tsfw"/><path class="wm8r90bpm"/><path class="f1ukjqbtv"/><path class="d6pxd4b4w"/></g>`,
		"fallback": "circle-flags:au-nsw",
	});
}

export default Component;
