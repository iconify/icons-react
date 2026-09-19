import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcqdwpbfu.css';
import '../../css/v/v-kdjsb9r.css';
import '../../css/e/ecbdqbjip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mcqdwpbfu"/><path clip-rule="evenodd" class="v-kdjsb9r"/><path class="ecbdqbjip"/></g>`,
		"fallback": "healthicons:animal-pig",
	});
}

export default Component;
