import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoag0abyi.css';
import '../../css/c/c1vxrxo6x.css';
import '../../css/i/imhsx5b4w.css';
import '../../css/p/plw6l7bwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoag0abyi"/><path class="c1vxrxo6x"/><path class="imhsx5b4w"/><path class="plw6l7bwv"/>`,
		"fallback": "energy-icons:gem-48",
	});
}

export default Component;
