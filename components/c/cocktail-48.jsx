import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbt7-c2ud.css';
import '../../css/s/sug610m-v.css';
import '../../css/g/gz0iumbzk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbt7-c2ud"/><path class="sug610m-v"/><path class="gz0iumbzk"/>`,
		"fallback": "energy-icons:cocktail-48",
	});
}

export default Component;
