import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2jxh9fwj.css';
import '../../css/b/b7i2f0z9m.css';
import '../../css/l/ldpo4n3qb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2jxh9fwj"/><path class="b7i2f0z9m"/><path class="ldpo4n3qb"/></g>`,
		"fallback": "tdesign:ai-coordinate-system",
	});
}

export default Component;
