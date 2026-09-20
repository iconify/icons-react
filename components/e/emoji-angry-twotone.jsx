import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs9o5v.css';
import '../../css/s/s1ui7u.css';
import '../../css/t/taf2xz.css';
import '../../css/r/rje0ii.css';
import '../../css/y/y4wbml.css';
import '../../css/p/px0lin.css';
import '../../css/u/ul_dtz.css';
import '../../css/s/sz81oq.css';
import '../../css/l/lx45-m.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs9o5v s1ui7u taf2xz"/><path class="rje0ii s1ui7u taf2xz y4wbml"/><path class="px0lin s1ui7u y4wbml"/><path class="s1ui7u taf2xz ul_dtz y4wbml"/><path class="s1ui7u sz81oq y4wbml"/><path class="lx45-m s1ui7u taf2xz y4wbml"/>`,
		"fallback": "line-md:emoji-angry-twotone",
	});
}

export default Component;
