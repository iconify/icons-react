import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp4eogk8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp4eogk8d"/>`,
		"fallback": "cbi:3dprinter-printing",
	});
}

export default Component;
