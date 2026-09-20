import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brvzaqbjd.css';
import '../../css/r/r45hujb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brvzaqbjd"/><path class="r45hujb-j"/>`,
		"fallback": "solar:folder-favourite-bookmark-bold-duotone",
	});
}

export default Component;
