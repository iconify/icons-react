import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kzwidabvb.css';
import '../../css/n/ng6yd7b6i.css';
import '../../css/o/o29vnjbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kzwidabvb"/><path class="ng6yd7b6i"/><path class="o29vnjbds"/></g>`,
		"fallback": "streamline-ultimate:hearing-disability",
	});
}

export default Component;
