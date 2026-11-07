import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbzto1kyu.css';
import '../../css/x/xi_mxdbjk.css';
import '../../css/q/qsvzrh2pz.css';
import '../../css/i/itkht4b8h.css';
import '../../css/p/pf7v6zb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tbzto1kyu"/><path class="xi_mxdbjk"/><path class="qsvzrh2pz"/><path class="itkht4b8h"/><path class="pf7v6zb-s"/>`,
		"fallback": "solar:gameboy-outline",
	});
}

export default Component;
