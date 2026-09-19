import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hof09nbzk.css';
import '../../css/t/t42cy5box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hof09nbzk"/><path clip-rule="evenodd" class="t42cy5box"/>`,
		"fallback": "basil:globe-outline",
	});
}

export default Component;
