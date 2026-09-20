import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/snbwucclc.css';
import '../../css/n/ndwdbjb7j.css';
import '../../css/b/bza-6eb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="snbwucclc"/><path class="ndwdbjb7j"/><path class="bza-6eb0g"/></g>`,
		"fallback": "streamline-ultimate:corporate-social-media",
	});
}

export default Component;
