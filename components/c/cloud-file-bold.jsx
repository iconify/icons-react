import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhj7tk-5q.css';
import '../../css/k/ktfgl0b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhj7tk-5q"/><path clip-rule="evenodd" class="ktfgl0b-d"/>`,
		"fallback": "solar:cloud-file-bold",
	});
}

export default Component;
