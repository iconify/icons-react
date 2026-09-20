import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bmvemnbfk.css';
import '../../css/o/o78455-pr.css';
import '../../css/b/b604ze8hf.css';
import '../../css/b/bt6djctfl.css';
import '../../css/u/un92x6bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bmvemnbfk"/><path class="o78455-pr"/><path class="b604ze8hf"/><path class="bt6djctfl"/><path class="un92x6bdu"/></g>`,
		"fallback": "streamline-cyber:first-aid-plaster",
	});
}

export default Component;
