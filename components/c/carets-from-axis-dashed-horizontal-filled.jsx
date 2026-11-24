import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qixv8v0ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qixv8v0ur"/>`,
		"fallback": "lucide-extended:carets-from-axis-dashed-horizontal-filled",
	});
}

export default Component;
