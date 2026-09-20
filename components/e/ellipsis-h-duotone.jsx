import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx93t8bdb.css';
import '../../css/b/bj2qr51xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx93t8bdb"/><path clip-rule="evenodd" class="bj2qr51xp"/>`,
		"fallback": "stash:ellipsis-h-duotone",
	});
}

export default Component;
