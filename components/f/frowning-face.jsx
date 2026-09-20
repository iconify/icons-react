import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/u/umomfebca.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/y/yw9-xwray.css';
import '../../css/o/owomm5jgl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="juu6lxbqs"/><path class="umomfebca"/><path class="s_f6m4b-b"/><path class="yw9-xwray"/><path class="owomm5jgl"/>`,
		"fallback": "streamline-emojis:frowning-face",
	});
}

export default Component;
