import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wtloudwuf.css';
import '../../css/g/g6e2c4d2h.css';
import '../../css/l/lo-bdo53p.css';
import '../../css/t/tcjvbpb5r.css';
import '../../css/b/b572__8fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wtloudwuf"/><path class="g6e2c4d2h wm-shine"/><path class="lo-bdo53p wm-k"/><path class="tcjvbpb5r wm-a"/><path class="b572__8fz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:gamepad",
	});
}

export default Component;
