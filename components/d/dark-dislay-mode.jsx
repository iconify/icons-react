import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nvl9l1wej.css';
import '../../css/f/fvfdntbhp.css';
import '../../css/d/dadt2hb4t.css';
import '../../css/h/hr1e7hbij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="nvl9l1wej"/><path class="fvfdntbhp"/><path class="dadt2hb4t"/><path class="hr1e7hbij"/></g>`,
		"fallback": "streamline-plump-color:dark-dislay-mode",
	});
}

export default Component;
