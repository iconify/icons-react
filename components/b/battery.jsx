import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmfunbhg.css';
import '../../css/f/fvf990b7v.css';
import '../../css/b/bbacmnblc.css';
import '../../css/n/n5eo0ek4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmfunbhg wm-a"/><path class="fvf990b7v wm-k"/><path class="bbacmnblc wm-a"/><path class="n5eo0ek4e wm-k"/>`,
		"fallback": "withicons-bauhaus:battery",
	});
}

export default Component;
