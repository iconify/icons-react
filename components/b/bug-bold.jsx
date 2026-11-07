import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3q7gcrgc.css';
import '../../css/z/zheflh_st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3q7gcrgc"/><path class="zheflh_st"/>`,
		"fallback": "solar:bug-bold",
	});
}

export default Component;
