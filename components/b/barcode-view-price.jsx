import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hcg6xtb3f.css';
import '../../css/b/bp6r2_56h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hcg6xtb3f"/><path class="bp6r2_56h"/></g>`,
		"fallback": "streamline-freehand:barcode-view-price",
	});
}

export default Component;
