import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zav3-ob_j.css';
import '../../css/m/m6r4ncclr.css';
import '../../css/u/ua1yalooh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zav3-ob_j"/><path class="m6r4ncclr wm-a"/><path class="ua1yalooh wm-a"/>`,
		"fallback": "withicons-bauhaus:hash",
	});
}

export default Component;
