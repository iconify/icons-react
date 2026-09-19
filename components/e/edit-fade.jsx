import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/h57e_jpgb.css';
import '../../css/b/bsx-gibzg.css';
import '../../css/t/tr1viwtnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="h57e_jpgb"/><path class="bsx-gibzg"/><path class="tr1viwtnz"/></g>`,
		"fallback": "gg:edit-fade",
	});
}

export default Component;
