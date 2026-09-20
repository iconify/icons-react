import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5bp7pmdg.css';
import '../../css/z/z5-9hkvso.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5bp7pmdg"/><path class="z5-9hkvso"/>`,
		"fallback": "nimbus:diskette",
	});
}

export default Component;
