import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqrc5kb9t.css';
import '../../css/p/pd_htdb7f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqrc5kb9t"/><path class="pd_htdb7f"/>`,
		"fallback": "gis:folder-globe-o",
	});
}

export default Component;
