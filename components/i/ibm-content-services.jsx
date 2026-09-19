import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rch7_ebcb.css';
import '../../css/r/r8xugpl5l.css';
import '../../css/t/taq167thd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rch7_ebcb"/><path class="r8xugpl5l"/><path class="taq167thd"/>`,
		"fallback": "carbon:ibm-content-services",
	});
}

export default Component;
