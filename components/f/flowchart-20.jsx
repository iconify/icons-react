import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlfukpbru.css';
import '../../css/s/sgrfz4b3j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlfukpbru"/><path class="sgrfz4b3j"/>`,
		"fallback": "energy-icons:flowchart-20",
	});
}

export default Component;
