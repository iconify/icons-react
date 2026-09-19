import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ifxv5jnsx.css';
import '../../css/w/wku5yfoda.css';
import '../../css/t/tvbhmybjt.css';
import '../../css/h/hedyzjbko.css';
import '../../css/q/qrmqiuqyo.css';
import '../../css/i/iwyk2q6tz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="ifxv5jnsx"/><rect class="wku5yfoda"/><path class="tvbhmybjt"/><path class="hedyzjbko"/><path class="qrmqiuqyo"/><path class="iwyk2q6tz"/></g>`,
		"fallback": "icon-park:air-conditioning",
	});
}

export default Component;
