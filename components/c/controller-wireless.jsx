import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x5ztd_d6h.css';
import '../../css/d/d95eludkt.css';
import '../../css/l/lj5j_jyat.css';
import '../../css/n/nvoeil81w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x5ztd_d6h"/><path class="d95eludkt"/><path class="lj5j_jyat"/><path class="nvoeil81w"/></g>`,
		"fallback": "streamline-cyber:controller-wireless",
	});
}

export default Component;
