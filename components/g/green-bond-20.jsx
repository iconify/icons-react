import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiwpj83ce.css';
import '../../css/h/h9e4f9v-u.css';
import '../../css/l/ln0tkebwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiwpj83ce"/><path class="h9e4f9v-u"/><path class="ln0tkebwf"/>`,
		"fallback": "energy-icons:green-bond-20",
	});
}

export default Component;
