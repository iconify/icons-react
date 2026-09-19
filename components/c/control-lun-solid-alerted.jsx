import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu410db3i.css';
import '../../css/v/vod9qb7fk.css';
import '../../css/u/uaycyrbmu.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu410db3i"/><path class="vod9qb7fk"/><path class="uaycyrbmu"/>`,
		"fallback": "clarity:control-lun-solid-alerted",
	});
}

export default Component;
