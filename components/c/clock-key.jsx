import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atjec8blw.css';
import '../../css/j/jv3e6ndtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="atjec8blw"/><path class="jv3e6ndtp"/></g>`,
		"fallback": "tabler:clock-key",
	});
}

export default Component;
