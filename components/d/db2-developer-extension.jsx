import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpfp1dycz.css';
import '../../css/c/cqm6b97dt.css';
import '../../css/r/r5yn_xycd.css';
import '../../css/a/aa_op5b8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpfp1dycz"/><path class="cqm6b97dt"/><circle class="r5yn_xycd"/><path class="aa_op5b8m"/>`,
		"fallback": "carbon:db2-developer-extension",
	});
}

export default Component;
