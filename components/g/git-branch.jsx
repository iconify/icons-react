import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/infrayb3b.css';
import '../../css/b/b2ob7rojk.css';
import '../../css/p/p3u_m9_oc.css';
import '../../css/b/b4mcopbsp.css';
import '../../css/w/wlg8mzbvw.css';
import '../../css/a/a1wbzsoix.css';
import '../../css/p/pdelepbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="infrayb3b"/><path class="b2ob7rojk"/><path class="p3u_m9_oc"/><path class="b4mcopbsp"/><path class="wlg8mzbvw"/><path class="a1wbzsoix"/><path class="pdelepbdt"/>`,
		"fallback": "withicons-bauhaus:git-branch",
	});
}

export default Component;
