import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btwzuobxo.css';
import '../../css/z/zjwhn7b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="folder-open-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="btwzuobxo"/><path class="zjwhn7b_n"/></g></g>`,
		"fallback": "cuida:folder-open-outline",
	});
}

export default Component;
