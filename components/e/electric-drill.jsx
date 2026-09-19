import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/j7bu-3b9t.css';
import '../../css/z/z7d0d0-5k.css';
import '../../css/d/d7m_sfb3s.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="j7bu-3b9t"/><path class="z7d0d0-5k"/><rect class="d7m_sfb3s"/><path class="izth8wb4y"/></g>`,
		"fallback": "icon-park:electric-drill",
	});
}

export default Component;
