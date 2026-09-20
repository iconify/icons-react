import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-0ed840g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-0ed840g"/>`,
		"fallback": "keyline-icons:circles-dashed-sharp",
	});
}

export default Component;
