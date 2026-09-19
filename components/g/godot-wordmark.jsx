import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkfc7xwie.css';
import '../../css/y/yihdv5bwz.css';
import '../../css/m/m5zxvlbno.css';
import '../../css/o/ocub-ubfm.css';
import '../../css/v/ve4aphbwk.css';
import '../../css/s/s8_hw1j5t.css';
import '../../css/f/fvx5lx3rt.css';
import '../../css/d/do6e2mbgi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkfc7xwie"/><path class="yihdv5bwz"/><path class="m5zxvlbno"/><path class="ocub-ubfm"/><path class="ve4aphbwk"/><path class="s8_hw1j5t"/><path class="fvx5lx3rt"/><path class="do6e2mbgi"/>`,
		"fallback": "devicon:godot-wordmark",
	});
}

export default Component;
