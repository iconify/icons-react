import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rwog68bpz.css';
import '../../css/b/bymqqb55b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0J7ARb6P"><g class="v3_i3wktz"><path class="rwog68bpz"/><path class="bymqqb55b"/></g></mask></defs><path mask="url(#SVG0J7ARb6P)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:equalizer",
	});
}

export default Component;
