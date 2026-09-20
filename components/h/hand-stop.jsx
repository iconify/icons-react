import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n8nqn8_oz.css';
import '../../css/w/wmbsorbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n8nqn8_oz"/><path class="wmbsorbdp"/></g>`,
		"fallback": "tabler:hand-stop",
	});
}

export default Component;
