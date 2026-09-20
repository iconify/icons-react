import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7wwud.css';
import '../../css/a/a0m25c.css';
import '../../css/o/oq600w.css';
import '../../css/s/sdwher.css';
import '../../css/o/odxlyn.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7wwud"/><path class="a0m25c oq600w"/><path class="a0m25c sdwher"/><path class="a0m25c odxlyn"/>`,
		"fallback": "line-md:home-simple-twotone",
	});
}

export default Component;
