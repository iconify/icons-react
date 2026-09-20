import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coubpfeoh.css';
import '../../css/r/rp4rwvb8v.css';
import '../../css/b/bozypcc4v.css';
import '../../css/a/aamlh1b6q.css';
import '../../css/b/brykjacoj.css';
import '../../css/w/wid4vlbjt.css';
import '../../css/o/owgv9f6yi.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coubpfeoh"/><path class="rp4rwvb8v"/><path class="bozypcc4v"/><path class="aamlh1b6q"/><path class="brykjacoj"/><path class="wid4vlbjt"/><path class="owgv9f6yi"/>`,
		"fallback": "thesvg-color:google-workspace-editors",
	});
}

export default Component;
