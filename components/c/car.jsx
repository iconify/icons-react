import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grltfp37s.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grltfp37s"/>`,
		"fallback": "el:car",
	});
}

export default Component;
