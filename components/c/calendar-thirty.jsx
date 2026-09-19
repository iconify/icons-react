import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pk-a31bhe.css';
import '../../css/a/a5ppbdbpy.css';
import '../../css/j/jxqi2jbpi.css';
import '../../css/d/d_tvbm67j.css';
import '../../css/s/stasitbmd.css';
import '../../css/w/w8tmv9oxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="pk-a31bhe"/><path class="a5ppbdbpy"/><line x1="4" x2="4" y1="11" y2="23" class="jxqi2jbpi"/><line x1="44" x2="44" y1="11" y2="23" class="jxqi2jbpi"/><path clip-rule="evenodd" class="d_tvbm67j"/><path class="stasitbmd"/><path class="w8tmv9oxx"/></g>`,
		"fallback": "icon-park:calendar-thirty",
	});
}

export default Component;
