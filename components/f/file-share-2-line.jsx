import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8fx6xbub.css';
import '../../css/e/e8yq54w-x.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8fx6xbub"/><path class="e8yq54w-x"/>`,
		"fallback": "clarity:file-share-2-line",
	});
}

export default Component;
