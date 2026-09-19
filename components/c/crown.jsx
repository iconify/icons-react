import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2yiegdfw.css';
import '../../css/h/hiuezpb0a.css';
import '../../css/z/zoiufacpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m2yiegdfw"/><path class="hiuezpb0a"/><path clip-rule="evenodd" class="zoiufacpe"/></g>`,
		"fallback": "pepicons:crown",
	});
}

export default Component;
