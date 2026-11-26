import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivh1z7bdr.css';
import '../../css/b/b1k78hpfz.css';
import '../../css/w/wx04sccmw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGpKYQeQOh" x1="60.97" x2="60.97" y1="-54.104" y2="167.839" gradientUnits="userSpaceOnUse"><stop offset="0" class="ivh1z7bdr"/><stop offset="1" class="b1k78hpfz"/></linearGradient></defs><path fill="url(#SVGpKYQeQOh)" class="wx04sccmw"/>`,
		"fallback": "devicon:binijs",
	});
}

export default Component;
