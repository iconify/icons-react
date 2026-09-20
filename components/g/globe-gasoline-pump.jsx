import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbau5pxqg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbau5pxqg"/>`,
		"fallback": "pinhead:globe-gasoline-pump",
	});
}

export default Component;
