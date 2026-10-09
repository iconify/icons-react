import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c56z29arz.css';
import '../../css/d/dj9nk1b3p.css';
import '../../css/h/hgry93bsw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c56z29arz"/><path class="dj9nk1b3p"/><path class="hgry93bsw"/>`,
		"fallback": "energy-icons:cable-lay-vessel-20-bold",
	});
}

export default Component;
