import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go23rjbfx.css';
import '../../css/m/md286fbip.css';
import '../../css/p/ppqywzgqr.css';
import '../../css/f/f37v2630u.css';
import '../../css/m/msfqnu7st.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="go23rjbfx"/><g class="md286fbip"><path class="ppqywzgqr"/><path class="f37v2630u"/><path class="msfqnu7st"/></g></g>`,
		"fallback": "cryptocurrency-color:elec",
	});
}

export default Component;
