import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co4u79bom.css';
import '../../css/t/t_qykii2y.css';
import '../../css/b/b6znd0b_r.css';
import '../../css/d/dgcljpugd.css';
import '../../css/g/gt-o6rbgd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="co4u79bom"/><rect class="t_qykii2y"/><circle class="b6znd0b_r"/><circle class="dgcljpugd"/><rect class="gt-o6rbgd"/>`,
		"fallback": "material-icon-theme:coloredpetrinets",
	});
}

export default Component;
