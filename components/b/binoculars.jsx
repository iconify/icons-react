import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oukifyh5x.css';
import '../../css/g/ggjrekbat.css';
import '../../css/b/bxq3mlbxt.css';
import '../../css/b/bcxsirbeb.css';
import '../../css/a/a6q4bf3jp.css';
import '../../css/w/wqbastxfw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oukifyh5x"/><path class="ggjrekbat"/><path class="bxq3mlbxt"/><path class="bcxsirbeb"/><path class="a6q4bf3jp"/><path class="wqbastxfw"/></g>`,
		"fallback": "streamline-flex-color:binoculars",
	});
}

export default Component;
