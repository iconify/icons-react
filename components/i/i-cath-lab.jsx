import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwigj8bqa.css';
import '../../css/f/fvz0x3bpb.css';
import '../../css/z/zg0gl4b4g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwigj8bqa"/><path class="fvz0x3bpb"/><path class="zg0gl4b4g"/>`,
		"fallback": "medical-icon:i-cath-lab",
	});
}

export default Component;
