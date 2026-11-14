import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b7plcyd2c.css';
import '../../css/s/sarjvl23p.css';
import '../../css/e/ebjelebbq.css';
import '../../css/r/r96ug_ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b7plcyd2c"/><path class="sarjvl23p"/><rect class="ebjelebbq"/><path class="r96ug_ban"/></g>`,
		"fallback": "evicons:charging-availability",
	});
}

export default Component;
