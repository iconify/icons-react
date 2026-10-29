import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vk9xs0tks.css';
import '../../css/b/bkfrv9bzn.css';
import '../../css/g/gxzyiwbeo.css';
import '../../css/t/tbddi3b5h.css';
import '../../css/v/v-jw61b1y.css';
import '../../css/s/skq-93bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vk9xs0tks wm-deco"/><path class="bkfrv9bzn wm-deco"/><path class="gxzyiwbeo wm-k"/><path class="tbddi3b5h wm-a"/><path class="v-jw61b1y wm-k"/><path class="skq-93bmt wm-a"/></g>`,
		"fallback": "withicons:arrow-left-to-line-blueprint",
	});
}

export default Component;
