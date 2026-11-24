import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b717o-bps.css';
import '../../css/g/gigg_sbik.css';
import '../../css/s/supxy0b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b717o-bps"/><path class="gigg_sbik"/><path class="supxy0b7x"/>`,
		"fallback": "lucide-extended:house-arrow-left-filled",
	});
}

export default Component;
