import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7ntegbxz.css';
import '../../css/o/oav94mv2z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7ntegbxz"/><path class="oav94mv2z"/>`,
		"fallback": "energy-icons:image-sparkle-20",
	});
}

export default Component;
