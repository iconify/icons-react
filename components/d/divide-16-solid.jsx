import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq53nzb0t.css';
import '../../css/d/dnwwjhmil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq53nzb0t"/><path class="dnwwjhmil"/>`,
		"fallback": "heroicons:divide-16-solid",
	});
}

export default Component;
