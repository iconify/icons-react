import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbnxx9blq.css';
import '../../css/g/gm01i2b1h.css';
import '../../css/t/ty6wxsbeo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lbnxx9blq"/><path class="gm01i2b1h"/><path class="ty6wxsbeo"/></g>`,
		"fallback": "streamline:ambulance",
	});
}

export default Component;
