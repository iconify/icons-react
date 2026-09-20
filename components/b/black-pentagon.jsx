import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krg4aibpx.css';
import '../../css/z/z68qmysoe.css';
import '../../css/s/s3_8gac3t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krg4aibpx"/><path class="z68qmysoe"/><path class="s3_8gac3t"/>`,
		"fallback": "openmoji:black-pentagon",
	});
}

export default Component;
