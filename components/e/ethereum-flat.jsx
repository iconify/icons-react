import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n5xesbc9i.css';
import '../../css/z/zomzwlbyb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n5xesbc9i"/><path class="zomzwlbyb"/></g>`,
		"fallback": "streamline-color:ethereum-flat",
	});
}

export default Component;
