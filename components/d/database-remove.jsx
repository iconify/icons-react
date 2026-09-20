import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhx0xbbhi.css';
import '../../css/r/r6n6ccbxo.css';
import '../../css/s/s7_t1ab2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fhx0xbbhi"/><path class="r6n6ccbxo"/><path class="s7_t1ab2c"/></g>`,
		"fallback": "streamline:database-remove",
	});
}

export default Component;
