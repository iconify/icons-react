import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/voe110b6i.css';
import '../../css/y/yt778-bcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="voe110b6i"/><path class="yt778-bcm"/></g>`,
		"fallback": "streamline-plump-color:coffee-mug-flat",
	});
}

export default Component;
