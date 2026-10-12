import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udwer-bvl.css';
import '../../css/j/jcdaq3bjh.css';
import '../../css/a/a4d54xg-r.css';
import '../../css/d/du3a-kbxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udwer-bvl"/><path class="jcdaq3bjh"/><path class="a4d54xg-r"/><path class="du3a-kbxd"/>`,
		"fallback": "energy-icons:crutch-48-bold",
	});
}

export default Component;
