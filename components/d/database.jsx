import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdmyli6zc.css';
import '../../css/j/jq-csbdvg.css';
import '../../css/p/pzimvc97i.css';
import '../../css/i/i4e19oseh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mdmyli6zc"/><path clip-rule="evenodd" class="jq-csbdvg"/><path class="pzimvc97i"/><path class="i4e19oseh"/></g>`,
		"fallback": "streamline-flex-color:database",
	});
}

export default Component;
