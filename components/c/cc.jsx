import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rms4c_byq.css';
import '../../css/h/h_sivobsd.css';
import '../../css/i/igr0gzbpp.css';
import '../../css/x/xlq4oxb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rms4c_byq"/><path class="h_sivobsd"/><path class="igr0gzbpp"/><path class="xlq4oxb4s"/></g>`,
		"fallback": "circle-flags:cc",
	});
}

export default Component;
