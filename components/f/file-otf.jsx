import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppev5fk1b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppev5fk1b"/>`,
		"fallback": "dinkie-icons:file-otf",
	});
}

export default Component;
