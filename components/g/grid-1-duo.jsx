import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aop5c88re.css';
import '../../css/p/phbl4obbj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aop5c88re"/><path class="phbl4obbj"/></g>`,
		"fallback": "glyphs:grid-1-duo",
	});
}

export default Component;
