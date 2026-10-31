import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m-n296otf.css';
import '../../css/a/ay3ercbfa.css';
import '../../css/o/oqi1c96sf.css';
import '../../css/c/cs0qu1nmp.css';
import '../../css/y/yfyya9d3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m-n296otf wm-shadow"/><path class="ay3ercbfa wm-shadow"/><path class="oqi1c96sf"/><path class="cs0qu1nmp"/><path class="wm-s yfyya9d3f"/></g>`,
		"fallback": "withicons-brutal:clock-alert",
	});
}

export default Component;
