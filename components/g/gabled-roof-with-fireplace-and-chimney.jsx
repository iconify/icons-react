import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx6p4trgt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx6p4trgt"/>`,
		"fallback": "pinhead:gabled-roof-with-fireplace-and-chimney",
	});
}

export default Component;
