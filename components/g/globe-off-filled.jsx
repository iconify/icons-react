import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kslho1p0c.css';
import '../../css/l/lizimdblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kslho1p0c"/><path class="lizimdblx"/>`,
		"fallback": "lucide-extended:globe-off-filled",
	});
}

export default Component;
