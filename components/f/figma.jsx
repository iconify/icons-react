import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1j4c2b7k.css';
import '../../css/g/gobrdmske.css';
import '../../css/t/t4uhcxbvm.css';
import '../../css/g/gpwengbuk.css';
import '../../css/h/hq7i28aum.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1j4c2b7k"/><path class="gobrdmske"/><rect transform="rotate(180 20 16)" class="t4uhcxbvm"/><path class="gpwengbuk"/><path class="hq7i28aum"/>`,
		"fallback": "material-icon-theme:figma",
	});
}

export default Component;
