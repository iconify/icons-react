import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvb8-3kxm.css';
import '../../css/z/zyi21ccro.css';
import '../../css/a/acldr0b1s.css';
import '../../css/p/p2a9m_-0g.css';
import '../../css/b/bmekwzbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvb8-3kxm"/><path class="zyi21ccro"/><path class="acldr0b1s"/><path class="p2a9m_-0g"/><path class="bmekwzbyd"/>`,
		"fallback": "withicons-bauhaus:car",
	});
}

export default Component;
