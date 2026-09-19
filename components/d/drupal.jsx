import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cxhrb1t.css';
import '../../css/z/zjuzcpbhe.css';
import '../../css/a/ayo620-7m.css';
import '../../css/h/h6gdwbeok.css';
import '../../css/b/br579xj1y.css';
import '../../css/r/r83crp8zv.css';
import '../../css/o/omnphvblp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2cxhrb1t"/><path class="zjuzcpbhe"/><path class="ayo620-7m"/><path class="h6gdwbeok"/><path class="br579xj1y"/><path class="r83crp8zv"/><path class="omnphvblp"/>`,
		"fallback": "devicon:drupal",
	});
}

export default Component;
