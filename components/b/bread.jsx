import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6ox5eb0v.css';
import '../../css/b/b00q3hb-i.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zv4wmrb6f.css';
import '../../css/x/xs8nfnbka.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6ox5eb0v"/><path class="b00q3hb-i"/><g class="ij2x_72vy"><path class="zv4wmrb6f"/><path class="xs8nfnbka"/></g>`,
		"fallback": "openmoji:bread",
	});
}

export default Component;
