import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gswtq35or.css';
import '../../css/r/r10rxstew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gswtq35or"/><path class="r10rxstew"/>`,
		"fallback": "solar:home-add-angle-bold-duotone",
	});
}

export default Component;
