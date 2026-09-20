import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ax5vvq6vn.css';
import '../../css/e/eloicbcre.css';
import '../../css/r/r0b997bob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ax5vvq6vn"/><path class="eloicbcre"/><path class="r0b997bob"/></g>`,
		"fallback": "streamline-plump-color:hotel-five-star",
	});
}

export default Component;
