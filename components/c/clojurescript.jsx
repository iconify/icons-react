import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjc7046xa.css';
import '../../css/z/z1fo83bqa.css';
import '../../css/f/fa09fs7nj.css';
import '../../css/q/qcwz8b5ks.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jjc7046xa"/><path class="z1fo83bqa"/><path class="fa09fs7nj"/><path class="qcwz8b5ks"/></g>`,
		"fallback": "devicon:clojurescript",
	});
}

export default Component;
