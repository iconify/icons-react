import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm3i78bcl.css';
import '../../css/d/d0bz8sb9m.css';
import '../../css/z/zzlmo8aoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm3i78bcl"/><path class="d0bz8sb9m"/><path class="zzlmo8aoy"/>`,
		"fallback": "boxicons:confused",
	});
}

export default Component;
