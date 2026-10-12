import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_jelzmb.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw_jelzmb"/><path class="l_fae7rzf"/>`,
		"fallback": "lucide-extended:file-input-filled",
	});
}

export default Component;
