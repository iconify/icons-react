import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0ca_zb6s.css';
import '../../css/g/gp21txb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0ca_zb6s"/><path clip-rule="evenodd" class="gp21txb1s"/>`,
		"fallback": "lucide-extended:bolt-filled",
	});
}

export default Component;
