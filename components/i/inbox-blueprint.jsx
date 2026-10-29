import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/raymrib0l.css';
import '../../css/l/l00otmbzz.css';
import '../../css/l/l-cwjj2tp.css';
import '../../css/t/tw7frqbfz.css';
import '../../css/j/jjywn-bdx.css';
import '../../css/h/h2wtbpb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="raymrib0l wm-deco"/><path class="l00otmbzz wm-deco"/><path class="l-cwjj2tp wm-k"/><path class="tw7frqbfz wm-a"/><path class="jjywn-bdx wm-k"/><path class="h2wtbpb8x wm-a"/></g>`,
		"fallback": "withicons:inbox-blueprint",
	});
}

export default Component;
