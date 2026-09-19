import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/kzdawxxtp.css';
import '../../css/w/wvr4a0ytd.css';
import '../../css/t/tplpwkbko.css';
import '../../css/b/byoe93bpe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="kzdawxxtp"/><path class="wvr4a0ytd"/><path class="tplpwkbko"/><path class="byoe93bpe"/></g>`,
		"fallback": "circle-flags:gp",
	});
}

export default Component;
