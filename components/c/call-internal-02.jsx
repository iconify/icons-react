import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pl8jhib9i.css';
import '../../css/f/f5_2c54hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pl8jhib9i"/><path class="f5_2c54hf"/></g>`,
		"fallback": "hugeicons:call-internal-02",
	});
}

export default Component;
