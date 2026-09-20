import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl33b-fvk.css';
import '../../css/o/o6kz01jke.css';
import '../../css/o/oxyodjyqf.css';
import '../../css/g/g16ecdgti.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl33b-fvk"/><path class="o6kz01jke"/><path class="oxyodjyqf"/><path class="g16ecdgti"/>`,
		"fallback": "thesvg-color:aliexpress",
	});
}

export default Component;
