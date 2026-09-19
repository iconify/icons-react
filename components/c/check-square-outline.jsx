import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ophaigqef.css';
import '../../css/g/gc8-4tb2b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ophaigqef"/><path class="gc8-4tb2b"/>`,
		"fallback": "ant-design:check-square-outline",
	});
}

export default Component;
