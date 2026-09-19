import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w8p4n1lgy.css';
import '../../css/f/f3d7m0bsp.css';
import '../../css/i/i80m4bopm.css';
import '../../css/u/u5e4dbbiu.css';
import '../../css/v/v86hsubye.css';
import '../../css/o/ovhw5cvml.css';
import '../../css/b/bcet3obta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w8p4n1lgy"/><path class="f3d7m0bsp"/><path class="i80m4bopm"/><path class="u5e4dbbiu"/><path class="v86hsubye"/><path class="ovhw5cvml"/><path class="bcet3obta"/></g>`,
		"fallback": "circle-flags:es",
	});
}

export default Component;
