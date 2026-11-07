import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdvcwidb.css';
import '../../css/g/gjmvk5b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdvcwidb"/><path clip-rule="evenodd" class="gjmvk5b4x"/>`,
		"fallback": "solar:hashtag-circle-bold-duotone",
	});
}

export default Component;
