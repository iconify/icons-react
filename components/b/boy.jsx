import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxr0gbmp.css';
import '../../css/z/zzfrmjuyw.css';
import '../../css/k/ktaeb2ibr.css';
import '../../css/u/u39hv57al.css';
import '../../css/o/oof9j2k2w.css';
import '../../css/y/y7rl6_y_b.css';
import '../../css/n/n5pmdmftf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxr0gbmp"/><path class="zzfrmjuyw"/><path class="ktaeb2ibr"/><path class="u39hv57al"/><path class="oof9j2k2w"/><path class="y7rl6_y_b"/><path class="n5pmdmftf"/>`,
		"fallback": "fxemoji:boy",
	});
}

export default Component;
