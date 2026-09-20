import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yiv6ndwku.css';
import '../../css/k/kxz_eqbba.css';
import '../../css/p/pz8xr85_k.css';
import '../../css/l/l_5g153qv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yiv6ndwku"/><path class="kxz_eqbba"/><path class="pz8xr85_k"/><path class="l_5g153qv"/></g>`,
		"fallback": "streamline-plump-color:color-picker",
	});
}

export default Component;
