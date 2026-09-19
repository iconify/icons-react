import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwzldfrvf.css';
import '../../css/m/mx362vb_b.css';
import '../../css/s/s3a1y7bdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gwzldfrvf"/><path class="mx362vb_b"/><path class="s3a1y7bdg"/></g>`,
		"fallback": "icon-park-outline:doc-search",
	});
}

export default Component;
