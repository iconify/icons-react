import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ze59dyhlm.css';
import '../../css/g/g34s5wbgd.css';
import '../../css/z/z0kq6bb5i.css';
import '../../css/v/vixwthbht.css';
import '../../css/a/acf1h4pvt.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ze59dyhlm"/><path class="g34s5wbgd"/><path class="z0kq6bb5i"/><path class="vixwthbht"/><path class="acf1h4pvt"/><path class="cfx1q448n"/></g>`,
		"fallback": "fluent-emoji-flat:clapping-hands-dark",
	});
}

export default Component;
