import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cpbthacsx.css';
import '../../css/r/rs9wcr-hb.css';
import '../../css/l/l61t4-b2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cpbthacsx"/><path class="rs9wcr-hb"/><path class="l61t4-b2q"/></g>`,
		"fallback": "healthicons:animal-bat",
	});
}

export default Component;
