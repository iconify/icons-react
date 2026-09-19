import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcse9kmkw.css';
import '../../css/e/e54jf8rbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcse9kmkw"/><path class="e54jf8rbf"/>`,
		"fallback": "icomoon-free:blogger2",
	});
}

export default Component;
