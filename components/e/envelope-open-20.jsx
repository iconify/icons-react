import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnati2tjw.css';
import '../../css/j/junk1jcyl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnati2tjw"/><path class="junk1jcyl"/>`,
		"fallback": "energy-icons:envelope-open-20",
	});
}

export default Component;
