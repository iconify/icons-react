import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vcvvvdbbn.css';
import '../../css/c/cn2a-mbod.css';
import '../../css/o/ontmpl02u.css';
import '../../css/s/sglwugb9f.css';
import '../../css/r/r-1aatwdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vcvvvdbbn wm-shadow"/><path class="cn2a-mbod"/><path class="ontmpl02u"/><path class="sglwugb9f"/><path class="r-1aatwdw"/></g>`,
		"fallback": "withicons-retro:feather",
	});
}

export default Component;
