import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uj4dlhj0o.css';
import '../../css/j/jg34bubij.css';
import '../../css/c/cdbkuu2ld.css';
import '../../css/y/ykniiz8fo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uj4dlhj0o"/><path class="jg34bubij"/><path class="cdbkuu2ld"/><path class="ykniiz8fo"/></g>`,
		"fallback": "streamline-color:calculator-2-flat",
	});
}

export default Component;
