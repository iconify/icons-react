import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzu8y9-ki.css';
import '../../css/h/hyp6ycbyw.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzu8y9-ki"/><path class="hyp6ycbyw"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-qatar",
	});
}

export default Component;
