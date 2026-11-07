import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivpr48ban.css';
import '../../css/m/mkzpafxuf.css';
import '../../css/x/xi_mxdbjk.css';
import '../../css/q/qsvzrh2pz.css';
import '../../css/h/hf_mynhto.css';
import '../../css/p/pf7v6zb-s.css';
import '../../css/a/an4daob8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivpr48ban"/><path class="mkzpafxuf"/><path class="xi_mxdbjk"/><path class="qsvzrh2pz"/><path class="hf_mynhto"/><path class="pf7v6zb-s"/><path class="an4daob8m"/>`,
		"fallback": "solar:gameboy-bold-duotone",
	});
}

export default Component;
