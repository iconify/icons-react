import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/l00-rybzk.css';
import '../../css/x/xmwezmwym.css';
import '../../css/n/ng94ilydm.css';
import '../../css/b/b7lw5jbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="l00-rybzk"/><path class="xmwezmwym"/><path class="ng94ilydm"/><path class="b7lw5jbys"/></g>`,
		"fallback": "streamline-plump-color:eye-optic",
	});
}

export default Component;
