import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r0hmkxtxf.css';
import '../../css/n/nz6ta7yil.css';
import '../../css/j/jvvu3bbeh.css';
import '../../css/i/i42jhdcnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r0hmkxtxf"/><path class="nz6ta7yil"/><path class="jvvu3bbeh"/><path class="i42jhdcnq"/></g>`,
		"fallback": "hugeicons:image-to-video",
	});
}

export default Component;
