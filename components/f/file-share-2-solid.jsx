import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjroy5biw.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjroy5biw"/>`,
		"fallback": "clarity:file-share-2-solid",
	});
}

export default Component;
