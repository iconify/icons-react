import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rb8zz63bl.css';
import '../../css/l/lnnqm3bke.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rb8zz63bl"/><path clip-rule="evenodd" class="lnnqm3bke"/></g>`,
		"fallback": "streamline-color:clipboard-remove-flat",
	});
}

export default Component;
