import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgtkisv0g.css';
import '../../css/m/ml_yym6-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pgtkisv0g"/><path class="ml_yym6-a"/></g>`,
		"fallback": "covid:covid19-virus-bat",
	});
}

export default Component;
