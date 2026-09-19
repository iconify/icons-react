import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kj7uwmfyr.css';
import '../../css/h/hlp0kabjt.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kj7uwmfyr"/><path class="hlp0kabjt"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-checkmark",
	});
}

export default Component;
