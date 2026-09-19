import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/itm_gqbii.css';
import '../../css/p/prjwigbsg.css';
import '../../css/m/m0fg2bb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsCs0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsCs0)"><path class="itm_gqbii"/><path class="prjwigbsg"/><path class="m0fg2bb7t"/></g>`,
		"fallback": "circle-flags:cs",
	});
}

export default Component;
