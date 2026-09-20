import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr2tweb2f.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr2tweb2f"/>`,
		"fallback": "wpf:business-contact",
	});
}

export default Component;
