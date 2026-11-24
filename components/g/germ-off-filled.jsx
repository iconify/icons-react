import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5_hjiief.css';
import '../../css/f/fdkgd3bwq.css';
import '../../css/p/pfkyy-b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5_hjiief"/><path class="fdkgd3bwq"/><path class="pfkyy-b4c"/>`,
		"fallback": "lucide-extended:germ-off-filled",
	});
}

export default Component;
