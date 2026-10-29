import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n96fwtxot.css';
import '../../css/v/vsjtogmkk.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/x/xlgd4ijcu.css';
import '../../css/c/cokp-kbum.css';
import '../../css/a/a93l_aczn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n96fwtxot wm-deco"/><path class="vsjtogmkk wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="wm-k xlgd4ijcu"/><path class="cokp-kbum wm-s"/><path class="a93l_aczn wm-s"/></g>`,
		"fallback": "withicons:git-pull-request-closed-blueprint",
	});
}

export default Component;
