import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx50cdblo.css';
import '../../css/s/skotkdb7i.css';
import '../../css/k/keplz_bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx50cdblo"/><path class="skotkdb7i"/><path class="keplz_bav"/>`,
		"fallback": "lucide-extended:goal-filled",
	});
}

export default Component;
