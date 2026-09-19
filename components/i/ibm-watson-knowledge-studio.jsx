import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm_xs9bvb.css';
import '../../css/d/duuf9m24f.css';
import '../../css/l/l5ktdfbkk.css';
import '../../css/r/rij7cdc-q.css';
import '../../css/a/ao705smgf.css';
import '../../css/r/rt4cydqwb.css';
import '../../css/v/vwra7-btv.css';
import '../../css/y/yi5a0ntmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm_xs9bvb"/><circle class="duuf9m24f"/><path class="l5ktdfbkk"/><circle class="rij7cdc-q"/><path class="ao705smgf"/><circle class="rt4cydqwb"/><path class="vwra7-btv"/><path class="yi5a0ntmu"/>`,
		"fallback": "carbon:ibm-watson-knowledge-studio",
	});
}

export default Component;
