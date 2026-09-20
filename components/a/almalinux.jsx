import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlrehucqb.css';
import '../../css/t/tuhut9kiz.css';
import '../../css/j/j391hb87n.css';
import '../../css/r/rj86qhb3n.css';
import '../../css/n/ny9wol8yz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlrehucqb"/><path class="tuhut9kiz"/><path class="j391hb87n"/><path class="rj86qhb3n"/><path class="ny9wol8yz"/>`,
		"fallback": "selfhst:almalinux",
	});
}

export default Component;
