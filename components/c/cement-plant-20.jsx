import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzr0hm98u.css';
import '../../css/z/zoam-0bdz.css';
import '../../css/f/fl-um2bwn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzr0hm98u"/><path class="zoam-0bdz"/><path class="fl-um2bwn"/>`,
		"fallback": "energy-icons:cement-plant-20",
	});
}

export default Component;
