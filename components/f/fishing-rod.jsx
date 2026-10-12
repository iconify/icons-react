import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1fzgdbbw.css';
import '../../css/i/i0t4go5uh.css';
import '../../css/g/gtlg1gbvy.css';
import '../../css/h/hpgh56bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a1fzgdbbw"/><path class="i0t4go5uh"/><circle class="gtlg1gbvy"/><path class="hpgh56bjl"/></g>`,
		"fallback": "andrsrxn:fishing-rod",
	});
}

export default Component;
