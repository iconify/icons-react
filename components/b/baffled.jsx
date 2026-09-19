import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzwd2419d.css';
import '../../css/e/ememapmfa.css';
import '../../css/k/kpk6-xseb.css';
import '../../css/b/bwf4zybsp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzwd2419d"/><path class="ememapmfa"/><path class="kpk6-xseb"/><path class="bwf4zybsp"/>`,
		"fallback": "icomoon-free:baffled",
	});
}

export default Component;
