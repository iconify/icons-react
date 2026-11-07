import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1-qbmafx.css';
import '../../css/u/ul-233bzy.css';
import '../../css/d/dbfay--fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1-qbmafx"/><path class="ul-233bzy"/><path clip-rule="evenodd" class="dbfay--fo"/>`,
		"fallback": "solar:align-bottom-bold-duotone",
	});
}

export default Component;
