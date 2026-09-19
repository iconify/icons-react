import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/b1zl1-bpc.css';
import '../../css/s/s_38i5s8e.css';
import '../../css/k/kjecq87zs.css';
import '../../css/l/lsadno_3x.css';
import '../../css/d/dhnp3_bnz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="b1zl1-bpc"/><path class="s_38i5s8e"/><path class="kjecq87zs"/><circle class="lsadno_3x"/><path class="dhnp3_bnz"/></g>`,
		"fallback": "circle-flags:et",
	});
}

export default Component;
