import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vusy_2blq.css';
import '../../css/m/m81jhhb3m.css';
import '../../css/t/t1ijvbdyl.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vusy_2blq"/><path class="m81jhhb3m"/><path class="t1ijvbdyl wm-shine"/><path class="euhc06b6i wm-k"/><path class="r309anzoi wm-a"/></g>`,
		"fallback": "withicons-kawaii:building",
	});
}

export default Component;
