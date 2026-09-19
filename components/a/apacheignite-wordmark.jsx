import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsg-22bgk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsg-22bgk"/>`,
		"fallback": "devicon-plain:apacheignite-wordmark",
	});
}

export default Component;
