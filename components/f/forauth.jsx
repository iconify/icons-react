import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnadv3bfh.css';
import '../../css/j/j0xz4wbzw.css';
import '../../css/d/d0e6wcchp.css';
import '../../css/u/usnw-tagi.css';
import '../../css/x/xjuqwibjx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bnadv3bfh"/><path class="j0xz4wbzw"/><path class="d0e6wcchp"/><path class="usnw-tagi"/><path class="xjuqwibjx"/>`,
		"fallback": "selfhst:forauth",
	});
}

export default Component;
