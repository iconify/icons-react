import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9nmtab-x.css';
import '../../css/b/bkmbl7bof.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9nmtab-x"/><path class="bkmbl7bof"/>`,
		"fallback": "energy-icons:chart-scatter-20",
	});
}

export default Component;
