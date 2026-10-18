import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc9itcbez.css';
import '../../css/d/d_av7khvm.css';
import '../../css/y/ymo2yhixw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc9itcbez"/><path class="d_av7khvm"/><path class="ymo2yhixw"/>`,
		"fallback": "energy-icons:cybersecurity-20",
	});
}

export default Component;
