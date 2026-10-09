import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to4jptyni.css';
import '../../css/b/br88s8yip.css';
import '../../css/l/l__3sd1xp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to4jptyni"/><path class="br88s8yip"/><path class="l__3sd1xp"/>`,
		"fallback": "energy-icons:biogas-digester-48",
	});
}

export default Component;
