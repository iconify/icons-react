import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ichh20b6b.css';
import '../../css/f/f4xgot2-t.css';
import '../../css/s/sshvt2bwd.css';
import '../../css/d/dmmpmib0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ichh20b6b"/><path class="f4xgot2-t"/><path class="sshvt2bwd"/><path class="dmmpmib0w"/>`,
		"fallback": "fxemoji:blackwaving",
	});
}

export default Component;
