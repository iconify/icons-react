import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spat6qbum.css';
import '../../css/g/ga5ow5xim.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spat6qbum"/><path class="ga5ow5xim"/><path class="x8r3bo3uc"/>`,
		"fallback": "carbon:ibm-cloud-pak-business-automation",
	});
}

export default Component;
