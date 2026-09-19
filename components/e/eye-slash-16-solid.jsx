import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwooq4bpl.css';
import '../../css/z/zkjh13stl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwooq4bpl"/><path class="zkjh13stl"/>`,
		"fallback": "heroicons:eye-slash-16-solid",
	});
}

export default Component;
