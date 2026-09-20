import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qcsv5xbnp.css';
import '../../css/a/abgf2mrlj.css';
import '../../css/q/qunn4grlt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qcsv5xbnp"/><path class="abgf2mrlj"/><path class="qunn4grlt"/></g>`,
		"fallback": "streamline:clipboard-check",
	});
}

export default Component;
