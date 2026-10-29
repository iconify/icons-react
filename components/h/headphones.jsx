import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz4027bss.css';
import '../../css/h/hdke9bc-g.css';
import '../../css/p/pvl81kbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz4027bss wm-a"/><path class="hdke9bc-g wm-k"/><path class="pvl81kbjy wm-k"/>`,
		"fallback": "withicons-bauhaus:headphones",
	});
}

export default Component;
