import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwfyp4bla.css';
import '../../css/a/a8y66z8px.css';
import '../../css/s/scdo1np3u.css';
import '../../css/h/h9tztfwwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwfyp4bla"/><path class="a8y66z8px"/><path class="scdo1np3u"/><path class="h9tztfwwx"/>`,
		"fallback": "selfhst:installatron",
	});
}

export default Component;
