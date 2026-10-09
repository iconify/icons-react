import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghmcvubhp.css';
import '../../css/a/aaodd-59v.css';
import '../../css/k/kw8p-gmhn.css';
import '../../css/c/cqkk-acux.css';
import '../../css/o/oz0-7c0kb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghmcvubhp"/><path class="aaodd-59v"/><path class="kw8p-gmhn"/><path class="cqkk-acux"/><path class="oz0-7c0kb"/>`,
		"fallback": "energy-icons:bus-stop-48-bold",
	});
}

export default Component;
