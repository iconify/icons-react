import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uf6h1sbvi.css';
import '../../css/w/wz5-7lbeo.css';
import '../../css/r/retl8lbug.css';
import '../../css/p/p9sb0nbgq.css';
import '../../css/i/icuw8dbmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="uf6h1sbvi"/><path class="wz5-7lbeo"/><path class="retl8lbug"/><path class="p9sb0nbgq"/><path class="icuw8dbmt"/></g>`,
		"fallback": "icon-park:bread-one",
	});
}

export default Component;
