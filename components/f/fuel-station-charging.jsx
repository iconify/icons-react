import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v550m8b4u.css';
import '../../css/s/saoofvbtd.css';
import '../../css/s/s00tgrb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="v550m8b4u"/><path class="saoofvbtd"/><path class="s00tgrb-l"/></g>`,
		"fallback": "evicons:fuel-station-charging",
	});
}

export default Component;
