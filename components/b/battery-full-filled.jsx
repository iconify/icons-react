import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pca152bqg.css';
import '../../css/f/fdgucpbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pca152bqg"/><path class="fdgucpbtj"/>`,
		"fallback": "lucide-extended:battery-full-filled",
	});
}

export default Component;
