import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtx6psbzo.css';
import '../../css/a/at7kggyha.css';
import '../../css/w/w-0qn00ya.css';
import '../../css/w/wyyrhux3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtx6psbzo wm-k"/><path class="at7kggyha wm-a"/><path class="w-0qn00ya wm-a"/><path class="wm-a wyyrhux3g"/>`,
		"fallback": "withicons-bauhaus:fingerprint",
	});
}

export default Component;
