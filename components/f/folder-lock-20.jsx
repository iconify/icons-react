import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6rvu93np.css';
import '../../css/y/yu2pl9xbr.css';
import '../../css/z/z_aw5vbcy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6rvu93np"/><path class="yu2pl9xbr"/><path class="z_aw5vbcy"/>`,
		"fallback": "energy-icons:folder-lock-20",
	});
}

export default Component;
