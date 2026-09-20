import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rb-j961er.css';
import '../../css/n/n0-b_oysz.css';
import '../../css/l/ljtm_oblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rb-j961er"/><path class="n0-b_oysz"/><path class="ljtm_oblt"/></g>`,
		"fallback": "streamline-logos:feed-burner-logo",
	});
}

export default Component;
