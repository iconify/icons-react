import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk7i4qv0w.css';
import '../../css/b/bu5x6-ooy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk7i4qv0w"/><path class="bu5x6-ooy"/>`,
		"fallback": "icomoon-free:book",
	});
}

export default Component;
