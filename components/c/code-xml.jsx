import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvfb504fx.css';
import '../../css/q/q4m_045yy.css';
import '../../css/d/dq7c41azz.css';
import '../../css/a/a7ql9qt_c.css';
import '../../css/u/u_-krv67s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvfb504fx wm-shadow"/><path class="q4m_045yy wm-k"/><path class="dq7c41azz wm-k"/><path class="a7ql9qt_c wm-a"/><path class="u_-krv67s wm-a"/>`,
		"fallback": "withicons-pastel:code-xml",
	});
}

export default Component;
