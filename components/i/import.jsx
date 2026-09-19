import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-4ux5-sz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-4ux5-sz"/>`,
		"fallback": "ant-design:import",
	});
}

export default Component;
