import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5_z21baa.css';
import '../../css/g/gomqi0iza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5_z21baa"/><path class="gomqi0iza"/></g>`,
		"fallback": "tabler:arrow-sharp-turn-left",
	});
}

export default Component;
