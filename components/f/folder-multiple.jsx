import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/h3v1rb.css';
import '../../css/q/qv815t.css';
import '../../css/m/m_zist.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-290yip.css';
import '../../css/d/d-zqdz1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c h3v1rb"/><path class="a0m25c qv815t"/><path class="a0m25c m_zist"/>`,
		"fallback": "line-md:folder-multiple",
	});
}

export default Component;
