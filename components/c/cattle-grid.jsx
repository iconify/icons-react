import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zij3g3brr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zij3g3brr"/>`,
		"fallback": "temaki:cattle-grid",
	});
}

export default Component;
