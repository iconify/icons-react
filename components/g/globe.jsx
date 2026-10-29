import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/l/le3dx2lni.css';
import '../../css/i/ivt1z-bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-a"/><path class="le3dx2lni wm-a"/><path class="ivt1z-bsn wm-a"/>`,
		"fallback": "withicons-bauhaus:globe",
	});
}

export default Component;
