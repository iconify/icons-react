import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgu3y8bwv.css';
import '../../css/c/csr785y7d.css';
import '../../css/e/e-k8a14my.css';
import '../../css/i/ii9lzr2st.css';
import '../../css/g/gbp9kabvw.css';
import '../../css/l/lk3em1bvo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgu3y8bwv"/><path class="csr785y7d"/><path class="e-k8a14my"/><path class="ii9lzr2st"/><path class="gbp9kabvw"/><path class="lk3em1bvo"/>`,
		"fallback": "fxemoji:horseface",
	});
}

export default Component;
