import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq9_gaclr.css';
import '../../css/a/ahbf3vjsr.css';
import '../../css/c/clvzc9bjd.css';
import '../../css/k/k0o2sdfps.css';
import '../../css/g/gzdg7_bpv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dq9_gaclr"/><circle class="ahbf3vjsr"/><circle class="clvzc9bjd"/><circle class="k0o2sdfps"/><path class="gzdg7_bpv"/>`,
		"fallback": "carbon:covariate",
	});
}

export default Component;
