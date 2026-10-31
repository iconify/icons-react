import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/slwvv0b7y.css';
import '../../css/b/ba2h5y1rv.css';
import '../../css/b/bzb7protl.css';
import '../../css/e/evrhv3bzm.css';
import '../../css/e/eihps2bsw.css';
import '../../css/y/ytfnh1bgj.css';
import '../../css/f/f-bmk-v4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="slwvv0b7y wm-shadow"/><path class="ba2h5y1rv"/><path class="bzb7protl"/><path class="evrhv3bzm wm-deco"/><path class="eihps2bsw"/><path class="ytfnh1bgj"/><path class="f-bmk-v4n wm-shine"/></g>`,
		"fallback": "withicons-retro:choco-strawberry",
	});
}

export default Component;
