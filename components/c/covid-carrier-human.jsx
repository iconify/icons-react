import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oa952hwxx.css';
import '../../css/e/e3a4n20td.css';
import '../../css/s/s35wv-bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oa952hwxx"/><path class="e3a4n20td"/><path class="s35wv-bzo"/></g>`,
		"fallback": "covid:covid-carrier-human",
	});
}

export default Component;
