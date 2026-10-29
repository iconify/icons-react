import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t_ybcacpd.css';
import '../../css/w/w2j8fqp7t.css';
import '../../css/s/svzyu4b-s.css';
import '../../css/n/nkw5t3buz.css';
import '../../css/g/gz9ya0bfz.css';
import '../../css/a/abq-2jb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t_ybcacpd wm-deco"/><path class="w2j8fqp7t wm-deco"/><path class="svzyu4b-s wm-k"/><path class="nkw5t3buz wm-a"/><path class="gz9ya0bfz wm-k"/><path class="abq-2jb_s wm-a"/></g>`,
		"fallback": "withicons:hash-blueprint",
	});
}

export default Component;
