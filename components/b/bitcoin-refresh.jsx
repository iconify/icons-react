import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zojxdwbqb.css';
import '../../css/q/qwul8q85w.css';
import '../../css/v/v_6rscepq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zojxdwbqb"/><path class="qwul8q85w"/><path class="v_6rscepq"/></g>`,
		"fallback": "reicon:bitcoin-refresh",
	});
}

export default Component;
