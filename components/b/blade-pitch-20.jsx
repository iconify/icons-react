import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8833_-nr.css';
import '../../css/g/gwws77byj.css';
import '../../css/h/hjobm6b7k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8833_-nr"/><path class="gwws77byj"/><path class="hjobm6b7k"/>`,
		"fallback": "energy-icons:blade-pitch-20",
	});
}

export default Component;
