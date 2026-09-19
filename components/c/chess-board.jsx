import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm4e25hpo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm4e25hpo"/>`,
		"fallback": "fa6-solid:chess-board",
	});
}

export default Component;
