import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c7f814b6z.css';
import '../../css/n/n3lzwnbxe.css';
import '../../css/w/w8-75c1_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="document-texts-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="c7f814b6z"/><path class="n3lzwnbxe"/><path class="w8-75c1_i"/></g></g>`,
		"fallback": "cuida:document-texts-outline",
	});
}

export default Component;
