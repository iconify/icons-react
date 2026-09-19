import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrooq11ts.css';
import '../../css/a/apkzo_3wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrooq11ts"/><path class="apkzo_3wp"/>`,
		"fallback": "boxicons:image-sparkle-filled",
	});
}

export default Component;
