import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eli7y2biq.css';
import '../../css/p/pb5i8-bvk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eli7y2biq"/><path class="pb5i8-bvk"/>`,
		"fallback": "temaki:fire-hydrant-underground",
	});
}

export default Component;
