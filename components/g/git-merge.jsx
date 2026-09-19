import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxl5el8-f.css';
import '../../css/t/thgdu0bta.css';
import '../../css/d/d62ydupxb.css';
import '../../css/g/gop114bue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hxl5el8-f"/><circle class="thgdu0bta"/><circle class="d62ydupxb"/><path class="gop114bue"/></g>`,
		"fallback": "charm:git-merge",
	});
}

export default Component;
