import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rcqvzqbeh.css';
import '../../css/v/vjs6n8g7s.css';
import '../../css/w/wj2hrmbia.css';
import '../../css/v/vm5kak9_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rcqvzqbeh"/><path class="vjs6n8g7s"/><path class="wj2hrmbia"/><path class="vm5kak9_o"/></g>`,
		"fallback": "circle-flags:er",
	});
}

export default Component;
