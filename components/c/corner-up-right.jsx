import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vycq92pxz.css';
import '../../css/g/gvb1macqf.css';
import '../../css/q/qkr5e8b8r.css';
import '../../css/v/vy1c44bir.css';
import '../../css/x/x2qgyjoth.css';
import '../../css/a/a0jb47bfy.css';
import '../../css/y/ym_cjhbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vycq92pxz wm-shadow"/><path class="gvb1macqf wm-k"/><path class="qkr5e8b8r wm-k"/><path class="vy1c44bir wm-k"/><path class="wm-k x2qgyjoth"/><path class="a0jb47bfy wm-k"/><path class="wm-shine ym_cjhbnf"/>`,
		"fallback": "withicons-pastel:corner-up-right",
	});
}

export default Component;
