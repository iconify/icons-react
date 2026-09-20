import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qdz2abcdv.css';
import '../../css/b/b-9kcut0b.css';
import '../../css/q/qd1ytjbdv.css';
import '../../css/x/xvc7nd93m.css';
import '../../css/e/elexycc3c.css';
import '../../css/d/d22o4rbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qdz2abcdv"/><path class="b-9kcut0b"/><path class="qd1ytjbdv"/><path class="xvc7nd93m"/><path class="elexycc3c"/><path class="d22o4rbyg"/></g>`,
		"fallback": "streamline-freehand-color:email-action-warning",
	});
}

export default Component;
