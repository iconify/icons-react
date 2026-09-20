import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/npgx2ubzl.css';
import '../../css/m/md445fekn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="npgx2ubzl"/><path class="md445fekn"/></g>`,
		"fallback": "reicon:data",
	});
}

export default Component;
