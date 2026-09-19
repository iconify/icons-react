import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbdi30pig.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbdi30pig"/>`,
		"fallback": "dinkie-icons:boy-small-filled",
	});
}

export default Component;
