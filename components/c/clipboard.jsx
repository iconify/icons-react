import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnsnku.css';
import '../../css/q/qa-o7h.css';
import '../../css/f/f2o4kw.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnsnku qa-o7h"/><path class="f2o4kw qa-o7h"/>`,
		"fallback": "line-md:clipboard",
	});
}

export default Component;
