import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tn0h24bih.css';
import '../../css/t/ti1fmsbsz.css';
import '../../css/h/h8xgiibmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="tn0h24bih"/><path class="ti1fmsbsz"/><path class="h8xgiibmi"/></g>`,
		"fallback": "icon-park:facial-cleanser",
	});
}

export default Component;
