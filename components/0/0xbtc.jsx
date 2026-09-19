import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i18k795dc.css';
import '../../css/m/md286fbip.css';
import '../../css/a/aildwlbyw.css';
import '../../css/g/gzs6bzqtu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="i18k795dc"/><g class="md286fbip"><path class="aildwlbyw"/><path class="gzs6bzqtu"/></g></g>`,
		"fallback": "cryptocurrency-color:0xbtc",
	});
}

export default Component;
