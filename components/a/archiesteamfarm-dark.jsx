import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm6ivxbpv.css';
import '../../css/r/ryv1mabbs.css';
import '../../css/i/igam31bgk.css';
import '../../css/t/tk1cyqr2k.css';
import '../../css/g/gw9hi4k1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm6ivxbpv"/><path class="ryv1mabbs"/><path class="igam31bgk"/><path class="tk1cyqr2k"/><path class="gw9hi4k1a"/>`,
		"fallback": "selfhst:archiesteamfarm-dark",
	});
}

export default Component;
