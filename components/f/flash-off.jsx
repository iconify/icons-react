import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig74zij5i.css';
import '../../css/g/gr5fk5bdg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ig74zij5i"/><path class="gr5fk5bdg"/></g>`,
		"fallback": "streamline-color:flash-off",
	});
}

export default Component;
