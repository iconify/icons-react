import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnyr7zr6t.css';
import '../../css/a/ad-wgrb5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnyr7zr6t"/><path class="ad-wgrb5a"/></g>`,
		"fallback": "streamline-plump-color:earpods-flat",
	});
}

export default Component;
