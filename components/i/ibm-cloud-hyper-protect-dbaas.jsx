import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjgbk469t.css';
import '../../css/p/pcn7t_b3w.css';
import '../../css/c/cdkh7bjct.css';
import '../../css/a/a6w2ebnxk.css';
import '../../css/s/skgtwgb_s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjgbk469t"/><circle class="pcn7t_b3w"/><circle class="cdkh7bjct"/><circle class="a6w2ebnxk"/><path class="skgtwgb_s"/>`,
		"fallback": "carbon:ibm-cloud-hyper-protect-dbaas",
	});
}

export default Component;
