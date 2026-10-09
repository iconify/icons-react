import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndv3dvc2g.css';
import '../../css/f/fi80utbym.css';
import '../../css/q/qyvlp9bjn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndv3dvc2g"/><path class="fi80utbym"/><path class="qyvlp9bjn"/>`,
		"fallback": "energy-icons:archery-20",
	});
}

export default Component;
