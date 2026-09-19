import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyppq7oik.css';
import '../../css/i/igodfwbbc.css';
import '../../css/r/rcktyeb-f.css';
import '../../css/g/gjbutub4x.css';
import '../../css/e/e_6giqb9j.css';
import '../../css/w/wlzny2oks.css';
import '../../css/o/omf0iborq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyppq7oik"/><path class="igodfwbbc"/><path class="rcktyeb-f"/><path class="gjbutub4x"/><path class="e_6giqb9j"/><path class="wlzny2oks"/><path class="omf0iborq"/></g>`,
		"fallback": "fluent-emoji-flat:flamingo",
	});
}

export default Component;
