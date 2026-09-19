import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htu5m_cpb.css';
import '../../css/i/iz_fwv24x.css';
import '../../css/u/uwugspbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="htu5m_cpb"/><path class="iz_fwv24x"/><path class="uwugspbgc"/>`,
		"fallback": "fxemoji:circledlatincapitalletterm",
	});
}

export default Component;
