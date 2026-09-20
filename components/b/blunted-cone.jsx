import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g9jq30rox.css';
import '../../css/r/rkzp9kwbv.css';
import '../../css/m/mi9-umnto.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="g9jq30rox"/><path class="rkzp9kwbv"/><path class="mi9-umnto"/></g>`,
		"fallback": "marketeq:blunted-cone",
	});
}

export default Component;
