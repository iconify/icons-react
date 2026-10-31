import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rvne7zbfe.css';
import '../../css/x/x-pqqv81t.css';
import '../../css/j/j3sudr36g.css';
import '../../css/m/mmi-77tzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="rvne7zbfe"/><path class="wm-shine x-pqqv81t"/><path class="j3sudr36g"/><path class="mmi-77tzp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-branch",
	});
}

export default Component;
