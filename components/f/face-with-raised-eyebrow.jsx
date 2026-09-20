import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_f6m4b-b.css';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/owomm5jgl.css';
import '../../css/f/fa1ellbje.css';
import '../../css/c/cafoxp39c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_f6m4b-b"/><path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="juu6lxbqs"/><path class="owomm5jgl"/><path class="fa1ellbje"/><path class="cafoxp39c"/>`,
		"fallback": "streamline-emojis:face-with-raised-eyebrow",
	});
}

export default Component;
