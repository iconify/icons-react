import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhwxisqb.css';
import '../../css/v/vjtu4jrxy.css';
import '../../css/y/yx458593i.css';
import '../../css/h/h9vdjeyrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhwxisqb"/><path class="vjtu4jrxy"/><path class="yx458593i"/><path class="h9vdjeyrv"/>`,
		"fallback": "energy-icons:ice-storage-48-bold",
	});
}

export default Component;
