import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnnv6kbpj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/go60rxbzw.css';
import '../../css/t/t340dj2hn.css';
import '../../css/d/dm_vappwo.css';
import '../../css/j/jivaq7bou.css';
import '../../css/r/r45f9z7gf.css';
import '../../css/i/i4kxzkcvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tnnv6kbpj"/><g class="dt0cm9dhy primary"><path class="go60rxbzw"/><path class="t340dj2hn"/><path class="dm_vappwo"/><path class="jivaq7bou"/><path class="r45f9z7gf"/><path class="i4kxzkcvw"/></g>`,
		"fallback": "iconaut:binary-duo",
	});
}

export default Component;
