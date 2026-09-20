import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we2m6qu7u.css';
import '../../css/g/gvqcqdbls.css';
import '../../css/l/ldrc7kton.css';
import '../../css/j/jilraqbnq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="we2m6qu7u"/><path clip-rule="evenodd" class="gvqcqdbls"/><path class="ldrc7kton"/><path clip-rule="evenodd" class="jilraqbnq"/></g>`,
		"fallback": "streamline-flex-color:definition-search-book-flat",
	});
}

export default Component;
