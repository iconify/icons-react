import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueiq1v0a.css';
import '../../css/z/zp1azf18h.css';
import '../../css/w/wr4i7gblb.css';
import '../../css/m/m510_tb5f.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueiq1v0a"/><path class="zp1azf18h"/><circle class="wr4i7gblb"/><circle class="m510_tb5f"/>`,
		"fallback": "iwwa:bad-o",
	});
}

export default Component;
