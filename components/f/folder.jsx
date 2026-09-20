import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krg18ob7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krg18ob7m"/>`,
		"fallback": "meteor-icons:folder",
	});
}

export default Component;
