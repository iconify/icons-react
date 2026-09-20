import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsy9-fwnj.css';
import '../../css/v/vemdn0bqs.css';
import '../../css/z/zlopywbwc.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jsy9-fwnj"/><path class="vemdn0bqs"/><path class="zlopywbwc"/><path class="ruoobvlrj"/><path class="p552hfbgz"/></g>`,
		"fallback": "reicon:global-edit",
	});
}

export default Component;
