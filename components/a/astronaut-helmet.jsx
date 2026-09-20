import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5y5uqbqi.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/r/riz4zb60p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q5y5uqbqi"/><circle class="h_tsn8bxt"/><path class="riz4zb60p"/></g>`,
		"fallback": "lucide-lab:astronaut-helmet",
	});
}

export default Component;
