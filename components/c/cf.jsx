import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rehki8kvn.css';
import '../../css/d/d7xvmv0ip.css';
import '../../css/c/cfl7k-b9e.css';
import '../../css/i/ilqy7wboq.css';
import '../../css/e/eqytyfu7c.css';
import '../../css/e/eupkuwbxe.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rehki8kvn"/><path class="d7xvmv0ip"/><path class="cfl7k-b9e"/><path class="ilqy7wboq"/><path class="eqytyfu7c"/><path class="eupkuwbxe"/></g>`,
		"fallback": "flagpack:cf",
	});
}

export default Component;
