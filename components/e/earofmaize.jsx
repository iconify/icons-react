import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt_mgpbid.css';
import '../../css/o/o6nn443db.css';
import '../../css/v/v_kq-2bzc.css';
import '../../css/q/qqog5e9wf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt_mgpbid"/><path class="o6nn443db"/><path class="v_kq-2bzc"/><path class="qqog5e9wf"/>`,
		"fallback": "fxemoji:earofmaize",
	});
}

export default Component;
