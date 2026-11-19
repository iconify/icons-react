import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugc0mrbrt.css';
import '../../css/s/ss4rb45jp.css';
import '../../css/l/lcut-4bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugc0mrbrt"/><path class="ss4rb45jp"/><path class="lcut-4bfo"/></g>`,
		"fallback": "andrsrxn:field-select",
	});
}

export default Component;
