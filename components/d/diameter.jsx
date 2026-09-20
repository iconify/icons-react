import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/p/p9vjoqtlo.css';
import '../../css/u/u8b1jwb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="xtsrmvj7o"/><circle class="p9vjoqtlo"/><path class="u8b1jwb7e"/></g>`,
		"fallback": "lucide:diameter",
	});
}

export default Component;
