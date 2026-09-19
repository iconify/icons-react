import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/smyfmwbao.css';
import '../../css/r/rotjrpbrk.css';
import '../../css/p/pcam0y89t.css';
import '../../css/d/d7xqisbuu.css';
import '../../css/b/bp9huxb3a.css';
import '../../css/i/ilogggznz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="smyfmwbao"/><path class="rotjrpbrk"/><path class="pcam0y89t"/><path class="d7xqisbuu"/><circle class="bp9huxb3a"/><circle class="ilogggznz"/></g>`,
		"fallback": "icon-park:data-screen",
	});
}

export default Component;
