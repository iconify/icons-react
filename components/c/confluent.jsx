import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt7qn8zzv.css';
import '../../css/u/uti-o7bls.css';
import '../../css/e/e3gzvobfa.css';

const viewBox = {"width":212,"height":41};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rt7qn8zzv"><path class="uti-o7bls"/><path class="e3gzvobfa"/></g>`,
		"fallback": "thesvg-color:confluent",
	});
}

export default Component;
