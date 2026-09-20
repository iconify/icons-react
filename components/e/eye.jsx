import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sc0c9hqgy.css';
import '../../css/t/tkn-bnbos.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sc0c9hqgy"/><path class="tkn-bnbos"/></g>`,
		"fallback": "lineicons:eye",
	});
}

export default Component;
