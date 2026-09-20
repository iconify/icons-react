import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f-x08-bia.css';
import '../../css/u/u-dndvxsd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f-x08-bia"/><path class="u-dndvxsd"/></g>`,
		"fallback": "streamline-plump-color:insert-side-flat",
	});
}

export default Component;
