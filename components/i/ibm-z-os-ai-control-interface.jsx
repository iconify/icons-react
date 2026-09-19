import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j60zr3b4x.css';
import '../../css/i/ireqoewfc.css';
import '../../css/c/c7gfsbb7m.css';
import '../../css/t/t1-idpbjp.css';
import '../../css/q/qk4ai5xli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j60zr3b4x"/><path class="ireqoewfc"/><circle class="c7gfsbb7m"/><path class="t1-idpbjp"/><path class="qk4ai5xli"/>`,
		"fallback": "carbon:ibm-z-os-ai-control-interface",
	});
}

export default Component;
