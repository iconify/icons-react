import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6tjyi3qm.css';
import '../../css/l/lafrf9bfq.css';
import '../../css/l/lpmetsbqk.css';
import '../../css/p/pd2qrk8_a.css';
import '../../css/x/xvc76bbmo.css';
import '../../css/x/x2h1jgx7i.css';
import '../../css/r/rk5ayjb8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6tjyi3qm"/><path class="lafrf9bfq"/><path class="lpmetsbqk"/><path class="pd2qrk8_a"/><path class="xvc76bbmo"/><path class="x2h1jgx7i"/><path class="rk5ayjb8g"/>`,
		"fallback": "fxemoji:clamshellmobile",
	});
}

export default Component;
