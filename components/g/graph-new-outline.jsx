import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj6z6-b0q.css';
import '../../css/p/plsjqqb0l.css';
import '../../css/u/ubakjmb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj6z6-b0q"/><path class="plsjqqb0l"/><path clip-rule="evenodd" class="ubakjmb1l"/>`,
		"fallback": "solar:graph-new-outline",
	});
}

export default Component;
