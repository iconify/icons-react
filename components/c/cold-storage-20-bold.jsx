import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao3l91_rp.css';
import '../../css/y/yc4_t_bsz.css';
import '../../css/y/ygr30c8ly.css';
import '../../css/m/m_alf_hon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao3l91_rp"/><path class="yc4_t_bsz"/><path class="ygr30c8ly"/><path class="m_alf_hon"/>`,
		"fallback": "energy-icons:cold-storage-20-bold",
	});
}

export default Component;
