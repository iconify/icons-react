import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsp7zgb3m.css';
import '../../css/w/wo7e92b0f.css';
import '../../css/m/min81mbjh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsp7zgb3m"/><path class="wo7e92b0f"/><path class="min81mbjh"/>`,
		"fallback": "energy-icons:dna-20-bold",
	});
}

export default Component;
