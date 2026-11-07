import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq8bxxi9p.css';
import '../../css/z/zyfh3yufc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq8bxxi9p"/><path class="zyfh3yufc"/>`,
		"fallback": "solar:crown-line-bold-duotone",
	});
}

export default Component;
