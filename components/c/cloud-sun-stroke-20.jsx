import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spgqeiahh.css';
import '../../css/x/xov8m50ru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spgqeiahh"/><path class="xov8m50ru"/>`,
		"fallback": "garden:cloud-sun-stroke-20",
	});
}

export default Component;
