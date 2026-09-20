import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs0auvbve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fs0auvbve"/>`,
		"fallback": "streamline-flex:curves-levels-graph-solid",
	});
}

export default Component;
