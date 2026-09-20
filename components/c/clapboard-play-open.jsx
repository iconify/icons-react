import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wwlj7bbuo.css';
import '../../css/v/vn4zd9u6o.css';
import '../../css/t/t29hnlc6l.css';
import '../../css/r/riqiuobkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="wwlj7bbuo"/><path class="vn4zd9u6o"/><path class="t29hnlc6l"/><path class="riqiuobkj"/></g>`,
		"fallback": "streamline-cyber:clapboard-play-open",
	});
}

export default Component;
