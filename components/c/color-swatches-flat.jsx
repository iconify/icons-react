import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lvsz0lbgi.css';
import '../../css/b/bi-cemi7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lvsz0lbgi"/><path class="bi-cemi7d"/></g>`,
		"fallback": "streamline-sharp-color:color-swatches-flat",
	});
}

export default Component;
