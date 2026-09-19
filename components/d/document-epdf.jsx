import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn1vqfd2n.css';
import '../../css/r/r4tc83xlk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn1vqfd2n"/><path class="r4tc83xlk"/>`,
		"fallback": "carbon:document-epdf",
	});
}

export default Component;
