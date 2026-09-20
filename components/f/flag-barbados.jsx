import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/f/fxatayb4m.css';
import '../../css/b/btnne-b7c.css';
import '../../css/l/ld6iebc7d.css';
import '../../css/m/m-y-k-bdl.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="fxatayb4m"/><g class="btnne-b7c"><path class="ld6iebc7d"/><path class="m-y-k-bdl"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-barbados",
	});
}

export default Component;
