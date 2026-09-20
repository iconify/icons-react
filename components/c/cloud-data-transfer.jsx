import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ry4bz9i7c.css';
import '../../css/o/okonu2j5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ry4bz9i7c"/><path class="okonu2j5x"/></g>`,
		"fallback": "streamline:cloud-data-transfer",
	});
}

export default Component;
