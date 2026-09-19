import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gro_6ubgm.css';
import '../../css/b/b59azjj9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gro_6ubgm"/><path class="b59azjj9a"/>`,
		"fallback": "heroicons:document-duplicate-16-solid",
	});
}

export default Component;
