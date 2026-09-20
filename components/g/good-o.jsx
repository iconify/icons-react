import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueiq1v0a.css';
import '../../css/a/aims5q5fz.css';
import '../../css/f/fm3-47bra.css';
import '../../css/g/ggw1rhbfc.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueiq1v0a"/><path class="aims5q5fz"/><circle class="fm3-47bra"/><circle class="ggw1rhbfc"/>`,
		"fallback": "iwwa:good-o",
	});
}

export default Component;
