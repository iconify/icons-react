import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb0ejrbgl.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/eivr74b-c.css';
import '../../css/d/dqm_pdzix.css';
import '../../css/x/xp9gy4r3c.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sb0ejrbgl"/><g class="xyjtgccot"><path class="eivr74b-c"/><path class="dqm_pdzix"/></g><path clip-rule="evenodd" class="xp9gy4r3c"/><path clip-rule="evenodd" class="jfigzne9w"/></g>`,
		"fallback": "pepicons-print:hand-point-circle",
	});
}

export default Component;
