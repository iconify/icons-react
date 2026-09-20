import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/t/t853gmb_n.css';
import '../../css/a/a-dt4q-jl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="t853gmb_n"/><path class="a-dt4q-jl"/></g>`,
		"fallback": "streamline-kameleon-color:heart-key",
	});
}

export default Component;
