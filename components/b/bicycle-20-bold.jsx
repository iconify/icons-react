import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf5_omxwj.css';
import '../../css/t/txu9wlbpb.css';
import '../../css/i/ip90d4b-u.css';
import '../../css/u/u0890tgpq.css';
import '../../css/h/huv_e_h8i.css';
import '../../css/m/mwwv_-70d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf5_omxwj"/><path class="txu9wlbpb"/><path class="ip90d4b-u"/><path class="u0890tgpq"/><path class="huv_e_h8i"/><path class="mwwv_-70d"/>`,
		"fallback": "energy-icons:bicycle-20-bold",
	});
}

export default Component;
