import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au5-sab1q.css';
import '../../css/h/hntgybcog.css';
import '../../css/v/v_ohp313d.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/i/i6jfamhaf.css';
import '../../css/v/vu0mtsbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGfdg6hBGo" class="au5-sab1q"/></defs><g class="hntgybcog"><use href="#SVGfdg6hBGo"/><path class="v_ohp313d"/><use href="#SVGfdg6hBGo" class="dvd6fwb9u"/><path class="i6jfamhaf"/><path class="vu0mtsbqq"/></g>`,
		"fallback": "reicon:devices3",
	});
}

export default Component;
