import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g83i4kb7d.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g83i4kb7d"/>`,
		"fallback": "fontisto:hexo",
	});
}

export default Component;
