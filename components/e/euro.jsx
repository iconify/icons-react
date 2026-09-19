import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/y/yt1sn-2sn.css';
import '../../css/o/oisne4m_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="yt1sn-2sn"/><path class="oisne4m_b"/>`,
		"fallback": "formkit:euro",
	});
}

export default Component;
