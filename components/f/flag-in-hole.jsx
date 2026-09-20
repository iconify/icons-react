import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4ziob-y.css';
import '../../css/l/ltsjrsb1c.css';
import '../../css/x/xtl0sqbog.css';
import '../../css/t/tqg1rxb0n.css';
import '../../css/j/j7widtbdv.css';
import '../../css/z/zh8nksz7m.css';
import '../../css/r/rnicdwtop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4ziob-y"/><path class="ltsjrsb1c"/><path class="xtl0sqbog"/><path class="tqg1rxb0n"/><path class="j7widtbdv"/><path class="zh8nksz7m"/><path class="rnicdwtop"/>`,
		"fallback": "streamline-emojis:flag-in-hole",
	});
}

export default Component;
