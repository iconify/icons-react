import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/laymhdblb.css';
import '../../css/i/i3yjklbnq.css';
import '../../css/w/ww1uvxbxt.css';
import '../../css/w/wzup-8xfj.css';
import '../../css/j/jfemo-btz.css';
import '../../css/p/p0fj_zv_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="laymhdblb"/><circle class="i3yjklbnq"/><path class="ww1uvxbxt"/><path class="wzup-8xfj"/><path class="jfemo-btz"/><path class="p0fj_zv_l"/></g>`,
		"fallback": "catppuccin:folder-turbo-open",
	});
}

export default Component;
