import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwd-a5bvw.css';
import '../../css/d/dz-ia743r.css';
import '../../css/q/qd99e1bmu.css';
import '../../css/t/tri7xd97g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwd-a5bvw"/><path class="dz-ia743r"/><path class="qd99e1bmu"/><path class="tri7xd97g"/>`,
		"fallback": "devicon:cakephp-wordmark",
	});
}

export default Component;
