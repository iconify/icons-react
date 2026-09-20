import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofsjy_64i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ofsjy_64i"/>`,
		"fallback": "streamline-flex:cube-remix",
	});
}

export default Component;
