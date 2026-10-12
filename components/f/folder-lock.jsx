import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spkac_bdx.css';
import '../../css/u/ups32ubwz.css';
import '../../css/r/r33ozbbfw.css';
import '../../css/a/asw291bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="spkac_bdx"/><path class="ups32ubwz"/><rect class="r33ozbbfw"/><path class="asw291bbl"/></g>`,
		"fallback": "andrsrxn:folder-lock",
	});
}

export default Component;
