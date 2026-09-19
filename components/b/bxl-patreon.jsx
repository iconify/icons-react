import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvalutb3t.css';
import '../../css/e/eqdsrrcni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qvalutb3t"/><path class="eqdsrrcni"/>`,
		"fallback": "bx:bxl-patreon",
	});
}

export default Component;
