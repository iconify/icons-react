import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze1b61bux.css';
import '../../css/m/mgmigcw4j.css';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yo_krqfoq.css';
import '../../css/m/md286fbip.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGkglzZcGG" class="ze1b61bux"/><path id="SVGoTDjBbjh" class="mgmigcw4j"/></defs><g class="bi12bsetm"><circle class="yo_krqfoq"/><use href="#SVGkglzZcGG" transform="translate(13.5 21.312)" class="md286fbip"/><use href="#SVGoTDjBbjh" transform="translate(7.5 6.25)" class="md286fbip"/></g>`,
		"fallback": "cryptocurrency-color:atlas",
	});
}

export default Component;
