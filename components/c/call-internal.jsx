import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vbk95qvou.css';
import '../../css/f/f5_2c54hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vbk95qvou"/><path class="f5_2c54hf"/></g>`,
		"fallback": "hugeicons:call-internal",
	});
}

export default Component;
