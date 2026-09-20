import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbjzb3tkp.css';
import '../../css/v/vj9ta8b3a.css';
import '../../css/s/s_5frpfwj.css';
import '../../css/u/u1dblbbwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbjzb3tkp"/><path class="vj9ta8b3a"/><path class="s_5frpfwj"/><path class="u1dblbbwq"/>`,
		"fallback": "selfhst:ente-photos-dark",
	});
}

export default Component;
