import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn5btr3ag.css';
import '../../css/z/z00wvqbup.css';
import '../../css/i/i8hlvlp5q.css';
import '../../css/d/djcoabcjk.css';
import '../../css/b/bvf5k4beu.css';
import '../../css/q/quzg2vzyk.css';
import '../../css/c/c2mu8acuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zn5btr3ag"/><path clip-rule="evenodd" class="z00wvqbup"/><path clip-rule="evenodd" class="i8hlvlp5q"/><path class="djcoabcjk"/><path clip-rule="evenodd" class="bvf5k4beu"/><path class="quzg2vzyk"/><path clip-rule="evenodd" class="c2mu8acuj"/></g>`,
		"fallback": "pepicons:briefcase",
	});
}

export default Component;
