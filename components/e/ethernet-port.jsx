import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtj8wjfye.css';
import '../../css/o/ohk9ijbrl.css';
import '../../css/z/z4yglv0kw.css';
import '../../css/w/wri8qfbki.css';
import '../../css/e/e2dmg7xua.css';
import '../../css/h/hiaxr9u4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gtj8wjfye wm-k"/><path class="ohk9ijbrl wm-k"/><path class="wm-k z4yglv0kw"/><path class="wm-k wri8qfbki"/><path class="e2dmg7xua wm-shine"/><path class="hiaxr9u4x wm-a"/></g>`,
		"fallback": "withicons-anime:ethernet-port",
	});
}

export default Component;
