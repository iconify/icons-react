import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvncfgbpp.css';
import '../../css/r/roohfabdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvncfgbpp"/><path class="roohfabdx"/>`,
		"fallback": "lucide-extended:file-check-corner-filled",
	});
}

export default Component;
