import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pytzghb1v.css';
import '../../css/l/lnlkl5tbt.css';
import '../../css/s/strh0bcug.css';
import '../../css/s/sn-_s4y-h.css';
import '../../css/p/pcjckvbvh.css';

const viewBox = {"width":190.5,"height":190.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pytzghb1v"/><path class="lnlkl5tbt"/><path class="strh0bcug"/><path class="sn-_s4y-h"/><path class="pcjckvbvh"/>`,
		"fallback": "thesvg-color:chrome",
	});
}

export default Component;
