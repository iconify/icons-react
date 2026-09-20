import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfhpf1x0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfhpf1x0p"/>`,
		"fallback": "meteor-icons:box-archive",
	});
}

export default Component;
