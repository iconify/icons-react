import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnul7o5fb.css';
import '../../css/p/pr_1mzb5o.css';
import '../../css/l/lxli7kbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnul7o5fb"/><circle class="pr_1mzb5o"/><path class="lxli7kbnc"/>`,
		"fallback": "carbon:ibm-cloud-hyper-protect-crypto-services",
	});
}

export default Component;
