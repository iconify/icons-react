import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfuj10bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfuj10bzj"/>`,
		"fallback": "ri:battery-saver-fill",
	});
}

export default Component;
