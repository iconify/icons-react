import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an2q472qx.css';
import '../../css/b/b2ob7rojk.css';
import '../../css/p/p3u_m9_oc.css';
import '../../css/b/b4mcopbsp.css';
import '../../css/w/wlg8mzbvw.css';
import '../../css/c/c99qrlbde.css';
import '../../css/h/hqb750bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an2q472qx"/><path class="b2ob7rojk"/><path class="p3u_m9_oc"/><path class="b4mcopbsp"/><path class="wlg8mzbvw"/><path class="c99qrlbde"/><path class="hqb750bvo"/>`,
		"fallback": "withicons-bauhaus:git-merge",
	});
}

export default Component;
