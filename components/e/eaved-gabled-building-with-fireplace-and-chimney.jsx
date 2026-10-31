import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvmk2esxq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvmk2esxq"/>`,
		"fallback": "pinhead:eaved-gabled-building-with-fireplace-and-chimney",
	});
}

export default Component;
