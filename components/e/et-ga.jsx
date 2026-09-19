import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pv_50rbzi.css';
import '../../css/k/kvl8sy3or.css';
import '../../css/o/ocf9p4ban.css';
import '../../css/g/gds--obwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pv_50rbzi"/><path class="kvl8sy3or"/><path class="ocf9p4ban"/><path class="gds--obwq"/></g>`,
		"fallback": "circle-flags:et-ga",
	});
}

export default Component;
