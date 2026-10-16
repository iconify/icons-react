import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5uaactm.css';
import '../../css/r/rnzp9jboq.css';
import '../../css/v/vayq6bcaz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5uaactm"/><path class="rnzp9jboq"/><path class="vayq6bcaz"/>`,
		"fallback": "energy-icons:hydrogen-leak-20",
	});
}

export default Component;
