import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ak_jjqnlm.css';
import '../../css/q/q6trnobms.css';
import '../../css/q/qry3u0blb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ak_jjqnlm"/><path class="q6trnobms"/><path class="qry3u0blb"/></g>`,
		"fallback": "streamline-flex-color:ice-cream-2-flat",
	});
}

export default Component;
