import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr0eqko7m.css';
import '../../css/q/q39gh2k1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr0eqko7m"/><path class="q39gh2k1m"/>`,
		"fallback": "energy-icons:glue-gun-20",
	});
}

export default Component;
