import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riy-kp_tn.css';
import '../../css/n/n6trubcil.css';
import '../../css/f/fw23rabbt.css';
import '../../css/y/ygstmac7x.css';
import '../../css/u/u1u_6bxpl.css';
import '../../css/n/net80gbsn.css';
import '../../css/v/vmk---hba.css';
import '../../css/o/ocjg61qxd.css';
import '../../css/p/pm3b4jasa.css';
import '../../css/m/mn43b-bvv.css';
import '../../css/h/hl-nptcii.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riy-kp_tn"/><path class="n6trubcil"/><path class="fw23rabbt"/><path class="ygstmac7x"/><path class="u1u_6bxpl"/><path class="net80gbsn"/><path class="vmk---hba"/><path class="ocjg61qxd"/><path class="pm3b4jasa"/><path class="mn43b-bvv"/><path class="hl-nptcii"/>`,
		"fallback": "devicon:browserstack-wordmark",
	});
}

export default Component;
