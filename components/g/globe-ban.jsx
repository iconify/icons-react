import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gsj4sma7f.css';
import '../../css/s/s9ygskb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gsj4sma7f"/><circle class="s9ygskb2h"/></g>`,
		"fallback": "lucide:globe-ban",
	});
}

export default Component;
