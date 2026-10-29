import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y85a9px8a.css';
import '../../css/h/hyg9sac6o.css';
import '../../css/z/zpiwv7bjq.css';
import '../../css/i/i7cyrmb3c.css';
import '../../css/d/d1up9g-eu.css';
import '../../css/e/egrt96b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y85a9px8a"/><path class="hyg9sac6o wm-deco"/><path class="wm-deco zpiwv7bjq"/><path class="i7cyrmb3c wm-k"/><path class="d1up9g-eu wm-a"/><path class="egrt96b8w wm-k"/></g>`,
		"fallback": "withicons:hammer-blueprint",
	});
}

export default Component;
