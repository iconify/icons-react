import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lkan53bfs.css';
import '../../css/i/i5mhe742h.css';
import '../../css/d/db3mifblg.css';
import '../../css/a/a5xzuwbku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lkan53bfs"/><path class="i5mhe742h"/><path class="db3mifblg"/><path class="a5xzuwbku"/></g>`,
		"fallback": "icon-park:empty",
	});
}

export default Component;
