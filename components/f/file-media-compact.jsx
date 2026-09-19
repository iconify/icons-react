import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsw04lgqz.css';
import '../../css/q/qviu0dxdv.css';
import '../../css/m/mm1rimbuj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hsw04lgqz"/><path clip-rule="evenodd" class="qviu0dxdv"/><path clip-rule="evenodd" class="mm1rimbuj"/></g>`,
		"fallback": "codicon:file-media-compact",
	});
}

export default Component;
