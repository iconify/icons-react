import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i2h9tmbip.css';
import '../../css/b/bswdohf5f.css';
import '../../css/d/dgdhsgi6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i2h9tmbip"/><rect class="bswdohf5f"/><path class="dgdhsgi6q"/></g>`,
		"fallback": "lucide:align-vertical-space-between",
	});
}

export default Component;
