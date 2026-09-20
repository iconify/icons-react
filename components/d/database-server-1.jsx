import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv70vhl3c.css';
import '../../css/n/nrpqu--cl.css';
import '../../css/s/s38sxvbud.css';
import '../../css/a/a84o4acnq.css';
import '../../css/c/ctu_0kb-f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv70vhl3c"/><path class="nrpqu--cl"/><path class="s38sxvbud"/><path class="a84o4acnq"/><path class="ctu_0kb-f"/></g>`,
		"fallback": "streamline-color:database-server-1",
	});
}

export default Component;
