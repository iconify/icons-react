import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aik43r5pi.css';
import '../../css/e/eb-i0y0sh.css';
import '../../css/q/qc8hk8p9a.css';
import '../../css/v/v2dcsq4ql.css';
import '../../css/q/qijs0vb1u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aik43r5pi"/><path class="eb-i0y0sh"/><circle class="qc8hk8p9a"/><circle class="v2dcsq4ql"/><circle class="qijs0vb1u"/>`,
		"fallback": "carbon:gui-management",
	});
}

export default Component;
