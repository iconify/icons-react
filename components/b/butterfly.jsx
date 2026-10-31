import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u9bfuyytg.css';
import '../../css/y/yilfabcua.css';
import '../../css/j/j_5zh3bjl.css';
import '../../css/o/o_o8ubb7f.css';
import '../../css/r/rew1fr1zd.css';
import '../../css/x/x1fdc8zzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u9bfuyytg wm-shadow"/><path class="yilfabcua"/><path class="j_5zh3bjl"/><path class="o_o8ubb7f"/><path class="rew1fr1zd"/><path class="x1fdc8zzi"/></g>`,
		"fallback": "withicons-retro:butterfly",
	});
}

export default Component;
