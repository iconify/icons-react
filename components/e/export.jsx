import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoec_aceq.css';
import '../../css/b/bii24pcyv.css';
import '../../css/i/iksyp0jtl.css';
import '../../css/u/un8hgvb8l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoec_aceq"/><g class="bii24pcyv"><path class="iksyp0jtl"/><path class="un8hgvb8l"/></g>`,
		"fallback": "flat-color-icons:export",
	});
}

export default Component;
