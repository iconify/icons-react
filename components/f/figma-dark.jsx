import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psek57b4e.css';
import '../../css/w/wwlr736nn.css';
import '../../css/u/uvw5zlbqi.css';
import '../../css/v/v2d1uib7g.css';
import '../../css/f/fo5m_pk5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psek57b4e"/><path class="wwlr736nn"/><circle class="uvw5zlbqi"/><path class="v2d1uib7g"/><path class="fo5m_pk5t"/>`,
		"fallback": "selfhst:figma-dark",
	});
}

export default Component;
