import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6xqauijj.css';
import '../../css/w/wqdp9q3qu.css';
import '../../css/b/bi35x5b6a.css';
import '../../css/n/nvpwspzng.css';

const viewBox = {"width":184,"height":184};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG9TBU6dgR)" clip-rule="evenodd" class="a6xqauijj"><path class="wqdp9q3qu"/><path class="bi35x5b6a"/></g><defs><clipPath id="SVG9TBU6dgR"><path class="nvpwspzng"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:exome",
	});
}

export default Component;
