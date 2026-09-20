import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/t/t_mnp--8c.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/owomm5jgl.css';
import '../../css/g/gee1-r36n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="t_mnp--8c"/><path class="juu6lxbqs"/><path class="owomm5jgl"/><path class="gee1-r36n"/>`,
		"fallback": "streamline-emojis:confounded-face",
	});
}

export default Component;
