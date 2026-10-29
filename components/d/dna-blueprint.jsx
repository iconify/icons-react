import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bgbj4bbsf.css';
import '../../css/j/jjfdtqb5r.css';
import '../../css/t/t4z_kdmpn.css';
import '../../css/n/n6ojxbbex.css';
import '../../css/w/wrkbx9bny.css';
import '../../css/o/o8ssdcf6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bgbj4bbsf wm-deco"/><path class="jjfdtqb5r wm-deco"/><path class="t4z_kdmpn wm-deco"/><path class="n6ojxbbex wm-k"/><path class="wm-a wrkbx9bny"/><path class="o8ssdcf6c wm-k"/></g>`,
		"fallback": "withicons:dna-blueprint",
	});
}

export default Component;
