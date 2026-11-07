import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v1i9zeb3v.css';
import '../../css/q/q27aehs6m.css';
import '../../css/v/v5l6lub0a.css';
import '../../css/q/q_xrdibnd.css';
import '../../css/r/r9pzq_b8w.css';
import '../../css/z/z_x1v508d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="v1i9zeb3v"/><path class="q27aehs6m"/></g><path class="v5l6lub0a"/><path class="q_xrdibnd"/><path class="r9pzq_b8w"/><path class="z_x1v508d"/>`,
		"fallback": "solar:bomb-emoji-bold-duotone",
	});
}

export default Component;
