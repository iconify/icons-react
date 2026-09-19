import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jt23tkppp.css';
import '../../css/h/hrmz_5b-w.css';
import '../../css/o/orc4cutqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jt23tkppp"/><path class="hrmz_5b-w"/><path class="orc4cutqc"/></g>`,
		"fallback": "covid:graph-infected-increasing",
	});
}

export default Component;
