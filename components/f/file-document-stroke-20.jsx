import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noxeszbuu.css';
import '../../css/y/ypv4l3ivv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noxeszbuu"/><path class="ypv4l3ivv"/>`,
		"fallback": "garden:file-document-stroke-20",
	});
}

export default Component;
