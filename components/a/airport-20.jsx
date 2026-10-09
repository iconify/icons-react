import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulf186bsh.css';
import '../../css/a/adm80pb1z.css';
import '../../css/f/f958kxxgy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulf186bsh"/><path class="adm80pb1z"/><path class="f958kxxgy"/>`,
		"fallback": "energy-icons:airport-20",
	});
}

export default Component;
