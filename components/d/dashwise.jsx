import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vl6c8ibxl.css';
import '../../css/r/ro5cgnb-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="bc1fd0lxe"/><path class="vl6c8ibxl"/><path class="ro5cgnb-p"/>`,
		"fallback": "selfhst:dashwise",
	});
}

export default Component;
