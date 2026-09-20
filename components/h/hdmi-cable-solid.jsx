import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l277xdb4x.css';
import '../../css/x/xqkddkb9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l277xdb4x"/><path class="xqkddkb9a"/>`,
		"fallback": "teenyicons:hdmi-cable-solid",
	});
}

export default Component;
