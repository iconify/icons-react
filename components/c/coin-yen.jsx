import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t86j2u4st.css';
import '../../css/w/w47ts_bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t86j2u4st"/><path class="w47ts_bhh"/></g>`,
		"fallback": "tabler:coin-yen",
	});
}

export default Component;
