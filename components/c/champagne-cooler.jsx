import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gh-ps-d0o.css';
import '../../css/p/py4ywmyhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gh-ps-d0o"/><path class="py4ywmyhu"/></g>`,
		"fallback": "streamline-ultimate:champagne-cooler",
	});
}

export default Component;
