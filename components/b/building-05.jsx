import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sjowjbelj.css';
import '../../css/x/xtis6o3so.css';
import '../../css/t/tuzwhbc4c.css';
import '../../css/v/v8gyovbgp.css';
import '../../css/j/jryg5tbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sjowjbelj"/><path class="xtis6o3so"/><path class="tuzwhbc4c"/><path class="v8gyovbgp"/><path class="jryg5tbgi"/></g>`,
		"fallback": "hugeicons:building-05",
	});
}

export default Component;
