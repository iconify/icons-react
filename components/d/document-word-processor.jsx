import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6gjfe24p.css';
import '../../css/r/r4tc83xlk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6gjfe24p"/><path class="r4tc83xlk"/>`,
		"fallback": "carbon:document-word-processor",
	});
}

export default Component;
