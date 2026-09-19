import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqrc5kb9t.css';
import '../../css/g/gldcflbrm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqrc5kb9t"/><path class="gldcflbrm"/>`,
		"fallback": "gis:folder-poi-o",
	});
}

export default Component;
