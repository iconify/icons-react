import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk9v8kbfn.css';
import '../../css/v/v2szjrygp.css';
import '../../css/t/tzko94lia.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk9v8kbfn"/><path class="v2szjrygp"/><path class="tzko94lia"/>`,
		"fallback": "openmoji:dvd",
	});
}

export default Component;
