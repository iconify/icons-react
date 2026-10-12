import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0tzg361r.css';
import '../../css/u/ubprlmtat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0tzg361r"/><path class="ubprlmtat"/>`,
		"fallback": "lucide-extended:battery-charging-filled",
	});
}

export default Component;
