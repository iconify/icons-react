import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/en82n4bnh.css';
import '../../css/t/t55f6-5kx.css';
import '../../css/r/ru4gt3b6s.css';
import '../../css/v/vtozfiy5g.css';
import '../../css/a/af_7ewbuj.css';
import '../../css/k/kell7tb9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="en82n4bnh"/><path class="t55f6-5kx"/><path class="ru4gt3b6s"/><path class="vtozfiy5g"/><path class="af_7ewbuj"/><path class="kell7tb9v"/></g>`,
		"fallback": "icon-park:coconut-tree",
	});
}

export default Component;
