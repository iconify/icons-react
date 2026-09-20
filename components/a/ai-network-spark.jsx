import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4dwfcxlu.css';
import '../../css/n/nn6o3jcjm.css';
import '../../css/p/p12jg8bju.css';
import '../../css/x/x-6lrwbac.css';
import '../../css/i/iw5ypyb5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4dwfcxlu"/><path class="nn6o3jcjm"/><path class="p12jg8bju"/><path class="x-6lrwbac"/><path class="iw5ypyb5p"/></g>`,
		"fallback": "streamline-color:ai-network-spark",
	});
}

export default Component;
