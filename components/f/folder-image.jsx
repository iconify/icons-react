import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/teuuz-bef.css';
import '../../css/s/sl3l8abxy.css';
import '../../css/n/nb0q2vbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="teuuz-bef"/><path class="sl3l8abxy"/><path class="nb0q2vbjv"/></g>`,
		"fallback": "iconamoon:folder-image",
	});
}

export default Component;
